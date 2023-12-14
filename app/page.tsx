import Link from 'next/link';
import Header from '@layout/Header';
import SelectComponent from './components/ui/Select';
import CodeBlock from './components/ui/CodeBlock';

export default function Home() {
  return (
    <>
    
    
      <div className='flex flex-col gap-4'>
      
     

      <section className='prose prose-p:my-1.5'>
        <div className=' flex flex-col border-2 border-gray-300 border-dotted bg-white py-4 px-6 text-black'>
          <p>This project was inspired by the amazing work of <Link rel='noopener noreferrer' target='_blank' href={'https://twitter.com/shadcn'} >shadcn</Link> with shadcn/ui.</p>
          <p>I wanted to create a little component collection for my web development projects. It's a work in progress...</p>
        </div>
        <h3>*</h3>
        <p>The components are written in TypeScript and styled with Tailwind CSS.</p>
        {/* <h4>select framework</h4> */}
        <h3>Installation</h3>
        <p>To initialize dependencies for a new project use the <span className='bg-gray-100 rounded-md'>init</span> command.</p>
        <p>This will install dependencies, add the tailwind.config.ts, and add the globals.css for the project.</p>
        <CodeBlock codeSnippet='npx wando-ui init'/>
      </section>

      <section className='prose'>
      <h3>Select Component</h3>
      <SelectComponent />
      
      </section>

      <section id='components' className='prose'>
        <h3>Add Component</h3>
        <p>To add components to your project use the <span className='bg-gray-100 rounded-md'>add</span> command.</p>
        <CodeBlock codeSnippet='npx wando-ui add $component'/>
      </section>
      </div>
    </>
  )
}
