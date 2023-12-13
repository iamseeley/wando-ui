import fs from 'fs-extra';
import path from 'path';
import inquirer from 'inquirer';
import fetch from 'node-fetch';

interface ComponentData {
    name: string;
    code: string;
}



async function fetchComponentsData(): Promise<ComponentData[] | null> {
    const url = 'https://raw.githubusercontent.com/iamseeley/wando-ui/app/data/components.ts';

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!Array.isArray(data) || !data.every(item => 'name' in item && 'code' in item)) {
            throw new Error('Invalid data format');
        }

        return data as ComponentData[];
    } catch (error) {
        console.error('Error fetching components data:', error);
        return null;
    }
}



export default async function add(componentName: string) {
    const componentsData = await fetchComponentsData();

    if (!componentsData) {
        console.error('Failed to fetch components data.');
        return;
    }

    const componentData = componentsData.find((comp: ComponentData) => comp.name === componentName);

    if (!componentData) {
        console.error(`Component ${componentName} not found.`);
        return;
    }



    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'componentDest',
            message: `Enter the destination path for ${componentName} (default: current directory):`,
            default: './'
        }
    ]);

    const componentDestDir = answers.componentDest;
    const destPath = path.resolve(process.cwd(), componentDestDir, `${componentName}.tsx`);

    fs.outputFile(destPath, componentData.code)
        .then(() => console.log(`Added ${componentName} component to the project at ${componentDestDir}.`))
        .catch(err => console.error('Error writing component file:', err));
}
