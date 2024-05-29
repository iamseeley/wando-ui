'use client'

import React, { FC, ReactNode, useState } from 'react';
import Button from './Button';
import Card from './Card';
import Progress from './Progress';
import Collapsible from './Collapsible';
import Avatar from './Avatar';
import Badge from './Badge';
import DatePicker from './DatePicker';
import Dialog from './Dialog';
import Dropdown from './Dropdown';
import Form from './Form';
import { Input } from './Form';
import Menubar from './Menubar';
import NavigationMenu from './NavMenu';
import Popover from './Popover';
import Select from './Selector';
import Switch from './Switch';
import Toggle from './Toggle';
import Tooltip from './Tooltip';
import Textarea from './Textarea';
import { componentsData } from '@/app/data/components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Link from 'next/link';


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
  const [intent, setIntent] = useState('primary'); // New state for intent
  const [isRounded, setIsRounded] = useState(false); 
  const [date, setDate] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  // Function to close the Dialog
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  // Function to handle date change, with the parameter typed as a string
  const handleDateChange = (newDate: string) => {
    setDate(newDate);
  };

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
      case 'Select Component':
        return <div className=" py-4">Oh, hi. Nothing to see here. Select a component!</div>;
      case 'Button':
        return <Card intent={"primary"}><Button rounded intent={"secondary"}>Button</Button></Card>;
    
      case 'Card':
        return <Card><div>Card Content</div></Card>;
    
      case 'Collapsible':
        return <Card><Collapsible label='collapse' intent={"primary"}><div><p>reveal</p></div></Collapsible></Card>;
    
      case 'Avatar':
        return <Card><Avatar alt='Avatar' intent={'primary'} size={'large'} src='/favicon.ico' /></Card>;
    
      case 'Badge':
        return <Card><Badge intent={'primary'}>badge</Badge></Card>;
    
      case 'DatePicker':
        return <Card><DatePicker /></Card>;
    
      case 'Dialog':
        return <Card><Dialog isOpen onClose={handleCloseDialog} intent={'primary'}><div>Tis the dialog.</div><div>It has appeared for you.</div></Dialog></Card>;
    
      case 'Dropdown':
        return <Card><Dropdown open={true} label={'menu'}><Link href="/">home</Link><Link href="/">about</Link><Link href="/">docs</Link></Dropdown></Card>;
      case 'Form':
        return <Card>
                  <Form intent="primary">
                    <h3 className="text-xl font-bold mt-0 mb-0">Form</h3>
                    <Input intent="primary" type="text" placeholder="Enter your name" />
                    <Input intent="primary" type="email" placeholder="Enter your email" />
                    <Button intent="secondary" type="submit">Submit</Button>
                  </Form>
              </Card>;
    
      case 'Menubar':
        return <Card>
                  <Menubar intent="primary" alignment="center" spacing="small">
                    <Button shadow={false}  intent="primary" href="#">Home</Button>
                    <Button shadow={false} intent="primary" href="#">About</Button>
                    <Dropdown intent="primary" label="More">
                      <Link  href="#">Services</Link>
                      <Link  href="#">Contact</Link>
                    </Dropdown>
                  </Menubar>
              </Card>;
    
      case 'NavigationMenu':
        return <Card><NavigationMenu><Link href='/'>home</Link><Link href='/'>home</Link></NavigationMenu></Card>;
    
        case 'Popover':
          return (
            <Card>
              <Popover 
                isOpen={isOpen} 
                setIsOpen={setIsOpen}
                trigger={<Button>Open Popover</Button>} 
                popoverContent={<div><ul><li>popover content</li><li>popover content</li></ul></div>} 
                intent="primary" 
              />
            </Card>
          );
    
      case 'Progress':
        return <Card><Progress value={50} intent="primary" /></Card>;
    
      case 'Select':
        return <Card><Select><option value="link">test</option><option value="link">test</option></Select></Card>;
    
      case 'Switch':
        return <Card><Switch checked={true} /></Card>;
    
      case 'Textarea':
        return <Card><Textarea intent="primary" /></Card>;
    
      case 'Toggle':
        return <Card><Toggle  /></Card>;

        case 'Tooltip':
          return <Card><Tooltip content="Tooltip text" intent="primary"></Tooltip></Card>;
    

        default:
            return null;
    }
  };

  return (
    <div>
      <select className='mb-2 p-2 rounded-md cursor-pointer' onChange={handleComponentChange} value={selectedComponent}>
      <option value="Select Component">Select Component</option>
      <option value="Avatar">Avatar</option>
      <option value="Badge">Badge</option>
      <option value="Button">Button</option>
  
      <option value="Card">Card</option>
      <option value="Collapsible">Collapsible</option>
      
      <option value="DatePicker">Date Picker</option>
      <option value="Dialog">Dialog</option>
      <option value="Dropdown">Dropdown Menu</option>
      <option value="Form">Form</option>
      <option value="Menubar">Menubar</option>
      <option value="NavigationMenu">Navigation Menu</option>
      <option value="Popover">Popover</option>
      <option value="Progress">Progress</option>
      <option value="Select">Select</option>
      <option value="Switch">Switch</option>
      <option value="Textarea">Textarea</option>
     
      <option value="Toggle">Toggle</option>
      <option value="Tooltip">Tooltip</option>

      
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
