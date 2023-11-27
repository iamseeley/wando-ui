'use client'

import React, { useState, useEffect } from 'react';
import Button from './Button';
import Card from './Card';

const SelectComponent = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  const [codeSnippet, setCodeSnippet] = useState<string>('');
  const [viewMode, setViewMode] = useState('preview');

  useEffect(() => {
    if (selectedComponent) {
      // Fetch the code snippet for the selected component
      fetch(`/api/componentCode/${selectedComponent}`)
        .then(response => response.json())
        .then(data => setCodeSnippet(data.code))
        .catch(error => console.error('Error fetching component code:', error));

      // Reset view mode to preview
      setViewMode('preview');
    }
  }, [selectedComponent]);

  const handleComponentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponent(event.target.value);
  };

  const handleViewModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setViewMode(event.target.value);
    
  };

  const renderDynamicComponent = () => {
    switch (selectedComponent) {
      case 'Button':
        return <Card><Button>Button</Button></Card>;
      case 'Card':
        return <Card><div>Card</div></Card>;
      // Add cases for other components
      default:
        return null;
    }
  };

  return (
    <div>
      <select className='mb-2 p-2 rounded-md cursor-pointer' onChange={handleComponentChange} value={selectedComponent}>
        <option value="">Select a component</option>
        <option value="Button">Button</option>
        <option value="Card">Card</option>
        {/* Add more options here */}
      </select>

      <div className="flex gap-2 mb-4 border-b border-gray-300">
        <span 
          className={`cursor-pointer ${viewMode === 'preview' ? 'border-b-2 border-orange-500' : ''}`}
          onClick={() => setViewMode('preview')}
        >
          Preview
        </span>
        <span 
          className={`cursor-pointer  ${viewMode === 'code' ? 'border-b-2 border-orange-500' : ''}`}
          onClick={() => setViewMode('code')}
        >
          Code
        </span>
      </div>

      {viewMode === 'preview' && renderDynamicComponent()}
      {viewMode === 'code' && <pre>{codeSnippet}</pre>}
    </div>
  );
};

export default SelectComponent;
