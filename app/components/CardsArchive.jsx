"use client"
import { useEffect, useState } from 'react'
import Card from './Card'
import Link from 'next/link'
import CardsSkelton from './CardsSkelton'
import axios from "axios"

const CardsArchive = () => {
  const [data, setData] = useState(null)
  const [filterData, setfilterData] = useState(null)
  const [sections, setSections] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const ticketResponse = await axios.get("/api/Posts");
        setData(ticketResponse.data.posts);
        setfilterData(ticketResponse.data.posts.slice(pageSize));

        const sectionResponse = await axios.get("/api/Section");
        setSections(sectionResponse.data.sections);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [pageSize]);

  if (isLoading) return <p className='text-center'><CardsSkelton /></p>
  if (!data) return <p>No  data</p>

  const handleFilterChange = (filterType, value) => {
    setLoading(true)
    let filtered;
    if (filterType === "section") {
      filtered = value == 0 ? data : data.filter((item) => item.section == value);
    }


    setfilterData(filtered.slice(0, pageSize));
    setLoading(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;
    setfilterData(data.slice(startIndex, endIndex));
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-4 mb-4 items-center">

        <div className="flex flex-col gap-3">
          <span className="mr-2">فیلتر بر اساس قسمت</span>
          <select
            className="select bg-black select-warning w-full max-w-xs"
            onChange={(e) => handleFilterChange("section", e.target.value)}
          >
            <option value={0}>All</option>
            {sections?.map((sec) => (
              <option key={sec._id} value={sec.secid}>
                {sec.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ">
        {filterData?.map(item => (
          <Link key={item._id} href={item.imgurl} className='h-full'>
            <Card card={item} />
          </Link>
        ))}
      </div>
      {data?.length < "12" ? null : <div className="flex justify-center my-6">
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

export default CardsArchive