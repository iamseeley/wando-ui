'use client'

import {FC} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';


type CodeBlockProps = {
    codeSnippet: string;
};

const CodeBlock: FC<CodeBlockProps> = ({ codeSnippet }) => {
    // Copy to Clipboard Function
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(codeSnippet);
            console.log('Code copied to clipboard!');
            // You can add more feedback logic here
        } catch (err) {
            console.error('Error in copying text: ', err);
        }
    };

    return (
     
        <div className='relative'>
          
            <button 
                onClick={copyToClipboard}
                className=' absolute top-6 right-4 cursor-pointer '
            >
                <svg className='stroke-slate-200' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            </button>
           
                
            <SyntaxHighlighter language="node-repl" style={darcula} customStyle={{ paddingTop: "12px"}}>
                {codeSnippet}
            </SyntaxHighlighter>
            
        </div>
        
    );
};

export default CodeBlock;