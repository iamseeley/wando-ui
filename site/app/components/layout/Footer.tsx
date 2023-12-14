import Link from "next/link";



export default function Footer() {
    return(
    <footer className="flex justify-center mt-10 ">
       <p className=""><Link className="opacity-60 hover:opacity-100" rel="noopener noreferrer" target="_blank" href={'https://tseeley.com'}>🛠️ tseeley.com</Link></p>

    </footer>
    );
}