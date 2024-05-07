import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import SiteConfig from '../config/site';
import { FaLink } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer p-4 text-neutral-content">
            <div className='flex flex-wrap items-center justify-center sm:justify-between  px-5 w-[98%] md:w-[92%] mx-auto py-4'>
                <aside className="flex gap-4 items-center grid-flow-col">
                    <button className='btn btn-ghost btn-circle hover:bg-amber-600'>
                    <FaLink color='FDE047' size={36} className="fill-current"/>
                    </button>
                    <p>کپی رایت © {new Date().getFullYear()} - <Link href="/" className='hover:text-[#FDE047] font-bold'>{SiteConfig.name}</Link></p>
                </aside>
                <nav className="flex grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href='www.linkedin.com/in/homayunmmdy'><FaLinkedinIn size={24} className="fill-current hover:text-[#FDE047]"/></a>
                    <a href='https://youtube.com/@thehomayunmmdy'><IoLogoYoutube size={24} className="fill-current hover:text-[#FDE047]"/></a>
                    <a><FaGithub size={24} className="fill-current hover:text-[#FDE047]"/></a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer