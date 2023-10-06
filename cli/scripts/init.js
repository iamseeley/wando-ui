const { execSync } = require('child_process');

module.exports = function initWandoUI() {
    console.log("Setting up wando-ui...");

    // Install TailwindCSS and other dependencies
    execSync('npm install tailwindcss postcss autoprefixer', { stdio: 'inherit' });

    // Any other setup logic for wando-ui can be added here

    console.log("wando-ui initialized successfully!");
};
