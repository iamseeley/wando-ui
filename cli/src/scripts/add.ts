import fs from 'fs-extra';
import path from 'path';
import inquirer from 'inquirer';
import fetch from 'node-fetch';

interface ComponentData {
    name: string;
    code: string;
}


async function fetchComponentCode(componentName: string): Promise<string> {
    const componentUrl = `https://raw.githubusercontent.com/iamseeley/wando-ui/main/app/components/ui/${componentName}.tsx`;
    const response = await fetch(componentUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch component ${componentName}: ${response.statusText}`);
    }
    return response.text();
}

async function fetchComponentsData(): Promise<ComponentData[] | null> {
    const listUrl = 'https://raw.githubusercontent.com/iamseeley/wando-ui/main/app/components/components.json';

    try {
        const response = await fetch(listUrl);
        const componentNames: string[] = await response.json() as string[];

        const componentsData: ComponentData[] = [];

        for (const name of componentNames) {
            const code = await fetchComponentCode(name);
            componentsData.push({ name, code });
        }

        return componentsData;
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
