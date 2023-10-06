const fs = require('fs-extra');
const path = require('path');

module.exports = function add(componentName) {
    const sourcePath = path.resolve(__dirname, `../../app/components/ui/${componentName}`);
    const destPath = path.resolve(process.cwd(), componentName);

    fs.copy(sourcePath, destPath)
        .then(() => console.log(`Added ${componentName} component to the project.`))
        .catch(err => console.error(err));
};
