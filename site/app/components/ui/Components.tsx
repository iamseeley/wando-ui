
// componentsMap.ts
import { ComponentType } from 'react';
import Button from './Button';
import Card from './Card';
// import other components

// Use React.ComponentType<any> to allow any props
const componentsMap: Record<string, ComponentType<any>> = {
  Button: Button,
  Card: Card,
  // Add other components here
};

export default componentsMap;
