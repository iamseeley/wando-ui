import Navbar from "@layout/Navbar"
import Image from "next/image";

export default function Header() {
    return (
    <header className="pt-12 flex flex-col justify-center items-center">
        <Image className="top-4" alt="Cute image of the Wando 'W' " src={'/assets/images/wando.png'} width={100} height={100} />
        <a className="font-bold items-center  text-xl" href="/">wando-ui</a>
        <Navbar />
    </header>
    );
}