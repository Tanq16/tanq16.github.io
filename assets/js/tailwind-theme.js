(function (global) {
    const ROLES = [
        'rosewater', 'flamingo', 'pink', 'mauve', 'red', 'maroon', 'peach', 'yellow',
        'green', 'teal', 'sky', 'sapphire', 'blue', 'lavender',
        'text', 'subtext1', 'subtext0', 'overlay2', 'overlay1', 'overlay0',
        'surface2', 'surface1', 'surface0', 'base', 'mantle', 'crust',
    ];

    // Channel-triplet vars rather than whole colours: Tailwind can only honour the /50 opacity
    // modifiers used across the site if it gets to inject the alpha itself.
    const colors = {};
    for (const role of ROLES) colors[role] = `rgb(var(--ctp-${role}) / <alpha-value>)`;

    if (global.tailwind) {
        global.tailwind.config = {
            theme: {
                extend: {
                    colors,
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    },
                    animation: {
                        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                        'orbit-slow': 'orbit 35s linear infinite',
                        'orbit-medium': 'orbit 25s linear infinite',
                        'orbit-fast': 'orbit 15s linear infinite',
                    },
                    keyframes: {
                        fadeInUp: {
                            '0%': { opacity: '0', transform: 'translateY(20px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                        orbit: {
                            '0%': { transform: 'rotate(0deg)' },
                            '100%': { transform: 'rotate(360deg)' },
                        },
                    },
                },
            },
        };
    }

    const channels = (role) =>
        getComputedStyle(document.documentElement).getPropertyValue('--ctp-' + role).trim();

    const query = global.matchMedia('(prefers-color-scheme: dark)');

    global.ctp = {
        roles: ROLES,
        glowAccents: ['mauve', 'pink', 'lavender', 'blue', 'sapphire', 'sky', 'teal'],
        ambientAccents: ['mauve', 'blue', 'lavender', 'pink', 'teal', 'sky', 'peach', 'green'],
        channels,
        triplet: (role) => channels(role).split(/[\s,]+/).map(Number),
        rgb: (role, alpha) => 'rgb(' + channels(role) + (alpha === undefined ? '' : ' / ' + alpha) + ')',
        isDark: () => query.matches,
        onChange: (fn) => query.addEventListener('change', fn),
    };
})(window);
