'use client'

import React, { FC, ReactNode, useState } from 'react';
import Button from './Button';
import Card from './Card';
import { componentsData } from '@/app/data/components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';


type CodeBlockProps = {
    codeSnippet: string;
};

const CodeBlock: FC<CodeBlockProps> = ({ codeSnippet }) => {
  const [isCopied, setIsCopied] = useState(false);

  // Copy to Clipboard Function
  const copyToClipboard = async () => {
      try {
          await navigator.clipboard.writeText(codeSnippet);
          console.log('Code copied to clipboard!');
          setIsCopied(true);
          // Hide the message after 2 seconds
          setTimeout(() => setIsCopied(false), 1000);
      } catch (err) {
          console.error('Error in copying text: ', err);
      }
  };

    return (
     
        <div className='relative'>
          
          <div className='absolute top-5 right-4 flex items-center'>
            {isCopied && (
                    <div className='m-0 p-0 text-sm text-slate-200 mr-2'>
                        Copied to clipboard!
                    </div>
                )}
            <button 
                onClick={copyToClipboard}
                className='cursor-pointer'
            >
                <svg className='stroke-slate-200' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            </button>
            </div>
           
                
            <SyntaxHighlighter useInlineStyles  language="typescript" style={darcula} customStyle={{ paddingTop: "40px"}}>
                {codeSnippet}
            </SyntaxHighlighter>
            
        </div>
        
    );
};




// Adjust the path as necessary

const SelectComponent = () => {
  const [selectedComponent, setSelectedComponent] = useState('');
  const [codeSnippet, setCodeSnippet] = useState('');
  const [viewMode, setViewMode] = useState('preview');

  const handleComponentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = event.target.value;
    setSelectedComponent(selectedName);

    const componentData = componentsData.find(comp => comp.name === selectedName);
    if (componentData) {
      setCodeSnippet(componentData.code);
    } else {
      setCodeSnippet('');
    }

    setViewMode('preview');
  };



  const renderDynamicComponent = () => {
    if (!selectedComponent) {
      
      return <div className=" py-4">Oh, hi. Nothing to see here. Select a component!</div>;
    }

    switch (selectedComponent) {
      case 'Button':
        return <Card intent={"primary"}><Button intent={"secondary"}>Button</Button></Card>;
      case 'Card':
        return <Card><div></div></Card>;
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

    {selectedComponent && (
      <div className="flex gap-2 mb-2 border-b border-gray-300">
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
    )}

    {viewMode === 'preview' ? renderDynamicComponent() : (selectedComponent && <CodeBlock codeSnippet={codeSnippet} />)}
</div> 
  );
};

export default SelectComponent;
