import React from 'react'

const UserMedia = () => {
  return (
    <div className='flex flex-col gap-2 bg-zinc-900 p-2 rounded-md'>
        <div className="header flex items-center justify-between">
            <h1 className='text-lg text-zinc-500'>User Media</h1>
            <p className='text-sky-500 text-lg'>See All</p>
        </div>
        <div className="medias flex items-center gap-3 flex-wrap max-h-[250px] overflow-auto">
            <div className="img w-[80px] h-[120px] bg-red-500 rounded-md"></div>
            <div className="img w-[80px] h-[120px] bg-red-500 rounded-md"></div>
            <div className="img w-[80px] h-[120px] bg-red-500 rounded-md"></div>
            <div className="img w-[80px] h-[120px] bg-red-500 rounded-md"></div>
            <div className="img w-[80px] h-[120px] bg-red-500 rounded-md"></div>
            <div className="img w-[80px] h-[120px] bg-red-500 rounded-md"></div>
            <div className="img w-[80px] h-[120px] bg-red-500 rounded-md"></div>
            <div className="img w-[80px] h-[120px] bg-red-500 rounded-md"></div>
            <div className="img w-[80px] h-[120px] bg-red-500 rounded-md"></div>
            <div className="img w-[80px] h-[120px] bg-red-500 rounded-md"></div>

        </div>
    </div>
  )
}

export default UserMedia