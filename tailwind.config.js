const ROLES = [
    'rosewater', 'flamingo', 'pink', 'mauve', 'red', 'maroon', 'peach', 'yellow',
    'green', 'teal', 'sky', 'sapphire', 'blue', 'lavender',
    'text', 'subtext1', 'subtext0', 'overlay2', 'overlay1', 'overlay0',
    'surface2', 'surface1', 'surface0', 'base', 'mantle', 'crust',
];

// Channel triplets rather than whole colours: collapsing these to a var reference drops every /NN opacity modifier on the site.
const colors = {};
for (const role of ROLES) colors[role] = `rgb(var(--ctp-${role}) / <alpha-value>)`;

module.exports = {
    content: [
        './index.html',
        './blog/index.html',
        './blog/templates/post.html',
        './assets/js/*.js',
        './blog/js/*.js',
    ],
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
