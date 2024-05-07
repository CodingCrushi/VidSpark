"use client"
import Link from 'next/link'
import React from 'react'
import { FaLink } from "react-icons/fa";
import { usePathname } from "next/navigation";
import SiteConfig from "@/app/config/site"
import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const nav = SiteConfig.nav;
    const { user } = useUser();

    // if (!user) {
    //     router.push("/sign-in");
    // }
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <button className="btn btn-ghost btn-circle">
                        <FaLink size={25} color='FDE047' />
                    </button>
                </div>
                <div className="navbar-center">
                    <Link className="btn btn-ghost font-bold text-xl hover:bg-black hover:text-amber-600" href="/">لینکو</Link>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm  lg:menu-lg dropdown-content mt-3 z-[1] p-2 left-0 shadow  border-4 border-amber-600 rounded-box w-52"
                        >
                            {nav?.map((item) => {
                                return (
                                    <li key={item.id} className="mb-2">
                                        {pathname === item.link ? <Link href={item.link} className="bg-amber-600 hover:bg-amber-600">{item.name}</Link> :
                                            <Link href={item.link} className='hover:bg-amber-600'>{item.name}</Link>}
                                    </li>
                                )
                            })}
                            {!user ? (<>
                                <li className="mb-2">
                                    <Link href="/sign-in" className='hover:bg-amber-600'>ورود</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/sign-up" className='hover:bg-amber-600'>ثبت نام</Link>
                                </li>
                            </>) : (
                                <> <li className="mb-2">
                                    <Link href="/user-profile" className='hover:bg-amber-600'>پروفایل</Link>
                                </li></>
                            )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar