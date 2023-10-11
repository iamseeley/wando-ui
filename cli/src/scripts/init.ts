import inquirer from 'inquirer';
import chalk from 'chalk';
import { execSync } from 'child_process';
import fsExtra from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function initWandoUI() {


    console.log("Setting up wando-ui...");

    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'globalsDest',
            message: 'Enter the destination path for globals.css (default: current directory):',
            default: './'
        }
    ]);

    const globalsDest = answers.globalsDest;
    
    // Install TailwindCSS and other dependencies
    console.log(chalk.white("Installing dependencies: tailwindcss, postcss, autoprefixer..."));
    execSync('npm install tailwindcss postcss autoprefixer', { stdio: 'inherit' });
    console.log(chalk.green("Dependencies installed successfully!"));

 


    // Define source paths (adjust as needed based on your exact directory structure)
    const tailwindConfigSource = path.join(__dirname, '..', '..', 'tailwind.config.ts');
    const globalStylesSource = path.join(__dirname, '..', '..', '..', 'wando-ui', 'app', 'globals.css');

    // Define destination paths
    const currentDirectory = process.cwd();
    const tailwindConfigDest = path.join(currentDirectory, 'tailwind.config.ts');
    const globalStylesDest = path.join(currentDirectory, globalsDest, 'globals.css');

    // Copy the tailwind.config.js and global.css files
    fsExtra.copySync(tailwindConfigSource, tailwindConfigDest);
    fsExtra.copySync(globalStylesSource, globalStylesDest);

    console.log("wando-ui initialized successfully!");
};
