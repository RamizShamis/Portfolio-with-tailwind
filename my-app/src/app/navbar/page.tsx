import Link from "next/link"
export default function Navbar(){
    return(
        <header className="flex justify-between bg-green-500 text-black-500 full max-w-screen-2xl">
      <div>
        <h1 className="text-3xl font-bold px-10 "> Ramiz Shamis</h1>
      </div>
      <div>
        <ul className="flex gap-x-5 px-10 mt-2 mx-7" >
            <li><Link href="/"> HOME</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact"> Contact Me</Link></li>
        </ul>
        </div>  
        
      </header>
    )
};