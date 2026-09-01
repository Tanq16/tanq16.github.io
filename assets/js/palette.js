(function (global) {
    const ROLES = [
        'rosewater', 'flamingo', 'pink', 'mauve', 'red', 'maroon', 'peach', 'yellow',
        'green', 'teal', 'sky', 'sapphire', 'blue', 'lavender',
        'text', 'subtext1', 'subtext0', 'overlay2', 'overlay1', 'overlay0',
        'surface2', 'surface1', 'surface0', 'base', 'mantle', 'crust',
    ];

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
