import Link from 'next/link';
import React from 'react'
import { GrFormNextLink } from "react-icons/gr";
import { FaLink } from "react-icons/fa";

const Card = ({ card}) => {
    return (
        <>
            <section className="flex flex-col justify-center antialiased p-4">
                <div className="h-full">
                    <div className="max-w-2xl mx-auto bg-amber-600 shadow-lg rounded-lg">
                        <div className="px-6 py-5">
                            <div className="flex items-start">
                                <div className="flex-grow truncate">
                                    <div className="w-full sm:flex truncate justify-end items-center mb-3">
                                        <h2 className="text-2xl leading-snug font-extrabold text-gray-50  mb-1 sm:mb-0">{card.title}</h2>
                                    </div>
                                    <div className="flex items-end justify-end whitespace-normal">
                                        <Link href={card.imgurl} className="flex-shrink-0 flex items-center justify-center text-amber-600 w-10 h-10 rounded-full bg-gradient-to-b from-amber-50 to-amber-100 hover:from-white hover:to-amber-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-150 ml-2" >
                                            <span className="block font-bold"><span className="sr-only">Read more</span><GrFormNextLink /></span>
                                        </Link>
                                        <div className="max-w-md text-amber-100">
                                            <p className="mb-2 max-h-[66px] overflow-hidden">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <FaLink color='FDE047' size={30} className="fill-current flex-shrink-0 mr-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Card