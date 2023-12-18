import inquirer from 'inquirer';
import chalk from 'chalk';
import { execSync } from 'child_process';
import fs from 'fs';
import fetch, { Response } from 'node-fetch';
import path from 'path';

export default async function initWandoUI(): Promise<void> {
    console.log("Setting up wando-ui...");

    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'globalsDest',
            message: 'Enter the destination path for globals.css (default: current directory):',
            default: './'
        }
    ]);

    const globalsDest: string = answers.globalsDest;

    console.log(chalk.white("Installing dependencies: tailwindcss, postcss, autoprefixer, class-variance-authority..."));
    execSync('npm install tailwindcss postcss autoprefixer class-variance-authority', { stdio: 'inherit' });
    console.log(chalk.green("Dependencies installed successfully!"));

    const tailwindConfigUrl: string = 'https://raw.githubusercontent.com/iamseeley/wando-ui/main/site/tailwind.config.ts';
    const globalsCssUrl: string = 'https://raw.githubusercontent.com/iamseeley/wando-ui/main/site/app/globals.css';

    const currentDirectory: string = process.cwd();
    const tailwindConfigDest: string = path.join(currentDirectory, 'tailwind.config.ts');
    const globalStylesDest: string = path.join(currentDirectory, globalsDest, 'globals.css');


    const downloadFile = async (url: string, dest: string): Promise<void> => {
        const response: Response = await fetch(url);
    
        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`Failed to download: ${url} - Response Status: ${response.status}`);
        }
    
        // Use a type assertion to tell TypeScript that response.body is not null
        const body = response.body as NodeJS.ReadableStream;
    
        const fileStream = fs.createWriteStream(dest);
        await new Promise((resolve, reject) => {
            body.pipe(fileStream);
            body.on("error", reject);
            fileStream.on("finish", resolve);
        });
    };
    
    

    try {
        await downloadFile(tailwindConfigUrl, tailwindConfigDest);
        await downloadFile(globalsCssUrl, globalStylesDest);
        console.log("wando-ui initialized successfully!");
    } catch (error) {
        console.error(chalk.red('Error downloading files:', error));
    }
}
