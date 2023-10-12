import Image from 'next/image';
import { Button } from '@ui/Button';
import Header from '@layout/Header';
import Link from 'next/link';
import { Card } from '@ui/Card';

export default function Home() {
  return (
    <>
    <Header />
    <div className="flex justify-center">
     
      <div className='flex flex-col gap-4'>
      <section className='h-screen'>
			<h1 className='pb-4 text-center text-3xl font-semibold'>Minimal, component collection.</h1>
      <div className='flex justify-center gap-4'>
        <Link href='/#get-started'><Button intent="primary">Let's Go</Button></Link>
        <Button intent="secondary">Github</Button>
      </div>
      </section>

      <section id='get-started' className='scroll-mt-10 prose'>
        <h3>Let's get started.</h3>
        <p>This project was inspired by shadcn's shadcn/ui and is intended to be a component collection for my web development projects @ wando.dev.</p>
        
        <p>The components are written in TypeScript and styled with Tailwind CSS</p>
        <h4>select framework</h4>
        <h3>Installation</h3>
        <pre>npx wando-ui init</pre>
      </section>

      <section className='prose'>
      <h4>select style</h4>
      </section>

      <section id='components' className='prose'>
        <h4>select component</h4>
        
        <Card><Button>Button</Button></Card>
        <h3>Add Component</h3>
        <pre>npx wando-ui add $component</pre>
      </section>
      </div>
    </div>
    </>
  )
}
