import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    daisyui: {
        themes: [

            {
            mytheme: {

                "primary": "#2563eb",

                "secondary": "#a3e635",

                "accent": "#4338ca",

                "neutral": "#374151",

                "base-100": "#304463",

                "info": "#22d3ee",

                "success": "#15803d",

                "warning": "#FFA823",

                "error": "#dc2626",
            },
        },
        "synthwave",
    ],
},

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        require('daisyui'),
        require('@tailwindcss/typography')
    ],
};
