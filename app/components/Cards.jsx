"use client"
import { useEffect, useState } from 'react'
import Card from './Card'
import Link from 'next/link'
import CardsSkelton from './CardsSkelton'

const Cards = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true);
    const [pageSize] = useState(-9);

    useEffect(() => {
        fetch('/api/Posts')
            .then((res) => res.json())
            .then((data) => {
                setData(data.posts.slice(pageSize))
                setLoading(false)
            })
    }, [pageSize])

    if (isLoading) return <p className='text-center'><CardsSkelton /></p>
    if (!data) return <p>No  data</p>


    return (
        <>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ">
                {data?.map(item => (
                    <Link key={item._id} href={item.imgurl} className='h-full'>
                        <Card card={item} />
                    </Link>
                ))}
            </div>
            <div className="m-1 flex justify-center items-center">
                <Link className="border-2 border-amber-700 rounded-xl	text-amber-700 hover:text-white font-medium flex p-3   hover:bg-amber-700 hover:opacity-90 lg:transition-all lg:ease-linear lg:duration-200 w-13" href="/archive" >بیشتر</Link>
            </div>
        </>
    )
}

export default Cards