// pages/api/componentCode/[component].ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface ComponentSources {
    [key: string]: string;
  }
  
  const componentSourceCode: ComponentSources = {
    Button: '<Button>Click me</Button>', // Button component source code as a string
    Card: '<Card>Card content</Card>', // Card component source code as a string
    // ... other components
  };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { component } = req.query;

  // Check if the code snippet exists for the requested component
  if (typeof component === 'string' && componentSourceCode[component]) {
    res.status(200).json({ code: componentSourceCode[component] });
  } else {
    res.status(404).json({ error: 'Component not found' });
  }
}
