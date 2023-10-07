import fs from 'fs-extra';
import path from require('path');

export default async function add(componentName) {
    const sourcePath = path.resolve(__dirname, `../../app/components/ui/${componentName}`);
    const destPath = path.resolve(process.cwd(), componentName);

    fs.copy(sourcePath, destPath)
        .then(() => console.log(`Added ${componentName} component to the project.`))
        .catch(err => console.error(err));
};
