const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../components/ui/');
const outputFilePath = path.join(__dirname, '../data/components.ts');

const getComponentDetails = () => {
  const componentFiles = fs.readdirSync(componentsDir);

  return componentFiles.map(fileName => {
    const filePath = path.join(componentsDir, fileName);
    const code = fs.readFileSync(filePath, 'utf8').replace(/`/g, '\\`'); // Escape backticks

    return {
      name: path.basename(fileName, '.tsx'), // Assuming your components are .tsx files
      code,
    };
  });
};

const saveComponentDetails = details => {
  const tsContent = `export const componentsData = ${JSON.stringify(details, null, 2)};`;
  fs.writeFileSync(outputFilePath, tsContent, 'utf8');
};

const componentDetails = getComponentDetails();
saveComponentDetails(componentDetails);
