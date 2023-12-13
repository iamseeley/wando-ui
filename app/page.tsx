import Image from 'next/image';
import Header from '@layout/Header';
import Link from 'next/link';
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import SelectComponent from './components/ui/Select';
import CodeBlock from './components/ui/CodeBlock';

export default function Home() {
  return (
    <>
    
    <div className="max-w-2xl">
    <Header />
      <div className='flex flex-col gap-4'>
      
     

      <section className='prose prose-p:my-1.5'>
        <h3>Let&apos;s get started.</h3>
        <p>This project was inspired by the amazing work of shadcn with shadcn/ui.</p>
        <p>My intention was to create a little component collection for my web development projects.</p>
        <p>The components are written in TypeScript and styled with Tailwind CSS.</p>
        {/* <h4>select framework</h4> */}
        <h3>Installation</h3>
        <CodeBlock codeSnippet='npx wando-ui init'/>
      </section>

      <section className='prose'>
      <SelectComponent />
      
      </section>

      <section id='components' className='prose'>
        <h3>Add Component</h3>
        <CodeBlock codeSnippet='npx wando-ui add $component'/>
      </section>
      </div>
    </div>
    </>
  )
}
