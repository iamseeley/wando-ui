import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import inquirer from 'inquirer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function add(componentName: string) {
    // Append .tsx extension to componentName
    const fileName = `${componentName}.tsx`;

    // Array of potential source directories
    const potentialPaths = [
        path.resolve(__dirname, `../../app/components/ui/${fileName}`),
        path.resolve(__dirname, `../../app/components/layout/${fileName}`)
    ];

    // Find the first existing source path
    const sourcePath = potentialPaths.find(fs.existsSync);

    if (!sourcePath) {
        console.error(`Component ${componentName} not found in UI or Layout directories.`);
        return;
    }

    // Prompt user for the destination directory
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'componentDest',
            message: 'Enter the destination path for ${fileName} (default: current directory):',
            default: './'
        }
    ]);

    const componentDestDir = answers.componentDest;
    const destPath = path.resolve(process.cwd(), componentDestDir, fileName);

    fs.copy(sourcePath, destPath)
        .then(() => console.log(`Added ${componentName} component to the project at ${componentDestDir}.`))
        .catch(err => console.error(err));
};
