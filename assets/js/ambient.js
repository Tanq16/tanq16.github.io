// Shared, self-initialising ambient background: soft colour-bubbles that morph, wander, and re-form.
(function () {
    if (window.__ambientBackgroundInit) return;
    window.__ambientBackgroundInit = true;

    const PALETTE = [
        [203, 166, 247],
        [137, 180, 250],
        [180, 190, 254],
        [245, 194, 231],
        [148, 226, 213],
        [137, 220, 235],
        [250, 179, 135],
        [166, 227, 161],
    ];
    const COUNT = 7;
    const MAX_SPEED = 42;

    const rand = (min, max) => min + Math.random() * (max - min);
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const smooth = (t) => t * t * (3 - 2 * t); // smoothstep easing

    function injectKeyframes() {
        if (document.getElementById('ambient-morph-kf')) return;
        const style = document.createElement('style');
        style.id = 'ambient-morph-kf';
        style.textContent =
            '@keyframes morph{0%,12%{border-radius:50%}44%,56%{border-radius:28%}88%,100%{border-radius:50%}}';
        document.head.appendChild(style);
    }

    function getContainer() {
        let el = document.getElementById('ambient-background');
        if (!el) {
            el = document.createElement('div');
            el.id = 'ambient-background';
            // z-index:-1 keeps it behind page content that doesn't set its own stacking
            el.style.cssText = 'position:fixed;inset:0;overflow:hidden;pointer-events:none;z-index:-1;';
            document.body.insertBefore(el, document.body.firstChild);
        }
        return el;
    }

    function run() {
        const container = getContainer();
        injectKeyframes();
        container.innerHTML = '';

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let W = window.innerWidth, H = window.innerHeight;
        window.addEventListener('resize', () => { W = window.innerWidth; H = window.innerHeight; });

        function spawn(s, first) {
            const size = rand(90, 190);
            s.size = size;
            s.color = pick(PALETTE);
            s.alpha = rand(0.05, 0.11);
            s.baseBlur = size * rand(0.04, 0.07);
            s.x = rand(size * 0.3, Math.max(size * 0.3, W - size * 0.3));
            s.y = rand(size * 0.3, Math.max(size * 0.3, H - size * 0.3));
            const dir = rand(0, Math.PI * 2), speed = rand(12, 34);
            s.vx = Math.cos(dir) * speed;
            s.vy = Math.sin(dir) * speed;
            s.formDur = rand(1.1, 1.8);
            s.lifespan = rand(7, 16);
            s.dissolveDur = rand(1.1, 1.8);
            s.age = first ? rand(0, s.lifespan) : 0; // stagger so they never sync

            const el = s.el;
            el.style.width = size + 'px';
            el.style.height = size + 'px';
            el.style.background = `rgba(${s.color[0]},${s.color[1]},${s.color[2]},${s.alpha})`;
            if (!reduce) {
                el.style.animation = `morph ${rand(9, 17).toFixed(1)}s ease-in-out ${(-rand(0, 12)).toFixed(1)}s infinite`;
            }
        }

        const bubbles = [];
        for (let i = 0; i < COUNT; i++) {
            const el = document.createElement('div');
            el.style.cssText = 'position:absolute;left:0;top:0;border-radius:50%;will-change:transform,opacity,filter,border-radius;';
            container.appendChild(el);
            const s = { el };
            spawn(s, true);
            bubbles.push(s);
        }

        if (reduce) {
            bubbles.forEach((s) => {
                s.el.style.borderRadius = '50%';
                s.el.style.opacity = '0.6';
                s.el.style.filter = `blur(${s.baseBlur}px)`;
                s.el.style.transform = `translate(${(s.x - s.size / 2).toFixed(1)}px, ${(s.y - s.size / 2).toFixed(1)}px)`;
            });
            return;
        }

        let last = performance.now();
        function frame(now) {
            const dt = Math.min(0.05, (now - last) / 1000); // clamp long gaps (tab switch)
            last = now;

            for (const s of bubbles) {
                s.age += dt;

                // --- lifecycle: form -> alive -> disperse into "dust" -> respawn ---
                let op, scale, extraBlur;
                if (s.age < s.formDur) {
                    const t = smooth(s.age / s.formDur);
                    op = t; scale = 0.6 + 0.4 * t; extraBlur = (1 - t) * 10;
                } else if (s.age < s.formDur + s.lifespan) {
                    op = 1; scale = 1; extraBlur = 0;
                } else if (s.age < s.formDur + s.lifespan + s.dissolveDur) {
                    const t = smooth((s.age - s.formDur - s.lifespan) / s.dissolveDur);
                    op = 1 - t; scale = 1 + 0.45 * t; extraBlur = t * 10;
                } else {
                    spawn(s, false);
                    continue;
                }

                // --- truly-random wander: jitter velocity, cap speed, soft-bounce off edges ---
                s.vx += rand(-14, 14) * dt;
                s.vy += rand(-14, 14) * dt;
                const sp = Math.hypot(s.vx, s.vy);
                if (sp > MAX_SPEED) { s.vx = s.vx / sp * MAX_SPEED; s.vy = s.vy / sp * MAX_SPEED; }
                s.x += s.vx * dt;
                s.y += s.vy * dt;
                const m = s.size * 0.25;
                if (s.x < m)     { s.x = m;     s.vx = Math.abs(s.vx); }
                if (s.x > W - m) { s.x = W - m; s.vx = -Math.abs(s.vx); }
                if (s.y < m)     { s.y = m;     s.vy = Math.abs(s.vy); }
                if (s.y > H - m) { s.y = H - m; s.vy = -Math.abs(s.vy); }

                s.el.style.opacity = op.toFixed(3);
                s.el.style.transform = `translate(${(s.x - s.size / 2).toFixed(1)}px, ${(s.y - s.size / 2).toFixed(1)}px) scale(${scale.toFixed(3)})`;
                s.el.style.filter = `blur(${(s.baseBlur + extraBlur).toFixed(1)}px)`;
            }
            requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
})();
