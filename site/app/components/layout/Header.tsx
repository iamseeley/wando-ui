import Navbar from "./Navbar";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

export default function Header() {
    return (
    <header className=" shadow-sm rounded-md p-4 my-4 mx-2  flex flex-col  bg-orange-500">
        {/* <Image className="top-4" alt="Cute image of the Wando 'W' " src={'/assets/images/wando.png'} width={100} height={100} /> */}
        <a className="font-bold text-orange-900 text-xl" href="/">wando-ui</a>
        
			<h1 className='pb-4 text-3xl text-orange-100 font-semibold'>Minimal, component collection.</h1>
            <div className='flex gap-4'>
                
                <Button href="https://github.com/iamseeley/wando-ui" intent="secondary">Github</Button>
            </div>
        <Navbar />
    </header>
    );
}