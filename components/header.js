import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

export default function header() {
  return (
    <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto 
                        flex flex-col items-center 
                        sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-3 sm:order-3 flex justify-center py-4 sm:py-0">
                <input type="text" className="input-text" placeholder="Search..."/>
            </div>
            <div className="shrink w-80 sm:order-2">
                <Link href={'/'}>
                    <a className="font-bold uppercase text-3xl">James Drysdale</a>
                </Link>
            </div>
            <div className="w-96 order-1 flex justify-center">
                <div className="flex gap-6">
                    <a href="https://www.linkedin.com/in/james-drysdale/"><FaLinkedin color="#888" /></a>
                    <a href="https://github.com/JamesDrysdale"><FaGithub color="#888" /></a>
                </div>
            </div>
        </div>
    </header>
  )
}
