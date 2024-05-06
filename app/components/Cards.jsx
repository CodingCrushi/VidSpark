"use client"
import { useEffect, useState } from 'react'
import Card from './Card'
import Link from 'next/link'
import CardsSkelton from './CardsSkelton'

const Cards = () => {
  const [data, setData] = useState(null)
  const [filterData, setfilterData] = useState(null)
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(9);

  useEffect(() => {
    fetch('/api/Posts')
      .then((res) => res.json())
      .then((data) => {
        setData(data.posts)
        setfilterData(data.posts.slice(0, pageSize))
        setLoading(false)
      })
  }, [pageSize])

  if (isLoading) return <p className='text-center'><CardsSkelton /></p>
  if (!data) return <p>No  data</p>

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;
    setfilterData(data.slice(startIndex, endIndex));
  };
  return (
    <>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ">
        {filterData?.map(item => (
          <Link key={item._id} href={item.imgurl} className='h-full'>
            <Card card={item} />
          </Link>
        ))}
      </div>
      {data?.length < "9" ? null : <div className="flex justify-center my-6">
        {Array.from({ length: Math.ceil(data.length / pageSize) }, (_, i) => (
          <button
            key={i}
            className={`mx-1 px-4 py-2  ${currentPage === i + 1 ? "bg-amber-600 text-white" : "bg-black"
              } rounded`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>}
    </>
  )
}

export default Cards