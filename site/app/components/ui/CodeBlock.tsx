'use client'

import React, { FC, useState } from 'react';
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
            // Hide the message after 1 second
            setTimeout(() => setIsCopied(false), 1000);
        } catch (err) {
            console.error('Error in copying text: ', err);
        }
    };

    return (
        <div className='relative'>
            <div className='absolute top-5 right-4 flex '>
            {isCopied && (
                    <div className='m-0 p-0 text-sm text-slate-200 mr-2'>
                        Copied to clipboard!
                    </div>
                )}
            <button 
                
                onClick={copyToClipboard}
                className='cursor-pointer'>
                <svg className='stroke-slate-200' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            </button>
            </div>
            
            
            <SyntaxHighlighter language="node-repl" style={darcula} customStyle={{ paddingTop: "12px"}}>
                {codeSnippet}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;







