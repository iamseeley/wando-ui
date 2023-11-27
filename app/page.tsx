import Image from 'next/image';
import Header from '@layout/Header';
import Link from 'next/link';
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import SelectComponent from './components/ui/Select';

export default function Home() {
  return (
    <>
    <Header />
    <div className="flex justify-center">
     
      <div className='flex flex-col gap-4'>
      <section className='h-screen'>
			<h1 className='pb-4 text-center text-3xl font-semibold'>Minimal, component collection.</h1>
      <div className='flex justify-center gap-4'>
        <Link href='/#get-started'><Button intent="primary">Let&apos;s Go</Button></Link>
        <Button intent="secondary">Github</Button>
      </div>
      </section>

      <section id='get-started' className='scroll-mt-10 prose prose-p:my-1.5'>
        <h3>Let&apos;s get started.</h3>
        <p>This project was inspired by the amazing work of shadcn with shadcn/ui.</p>
        <p>My intention was to create a little component collection for my web development projects.</p>
        <p>The components are written in TypeScript and styled with Tailwind CSS.</p>
        {/* <h4>select framework</h4> */}
        <h3>Installation</h3>
        <pre>npx wando-ui init</pre>
      </section>

      <section className='prose'>
      <SelectComponent />
      
      </section>

      <section id='components' className='prose'>
        <h3>Add Component</h3>
        <pre>npx wando-ui add $component</pre>
      </section>
      </div>
    </div>
    </>
  )
}
