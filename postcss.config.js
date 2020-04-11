// Makes use of the autoprefixer plugin
// Common JS syntax
// Takes the Tailwind.js file which is in the root

const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
};