import React from 'react'

const CardsSkelton = () => {
    return (
        <div>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div className="skeleton h-44 w-full"></div>
                <div className="skeleton h-44 w-full"></div>
                <div className="skeleton h-44 w-full"></div>
                <div className="skeleton h-44 w-full"></div>
                <div className="skeleton h-44 w-full"></div>
                <div className="skeleton h-44 w-full"></div>
                <div className="skeleton h-44 w-full"></div>
                <div className="skeleton h-44 w-full"></div>
                <div className="skeleton h-44 w-full"></div>
            </div>
        </div>
    )
}

export default CardsSkelton