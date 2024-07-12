import Image from 'next/image'
import React from 'react'

const AddComment = () => {
  return (
    <div className='flex items-center gap-2 px-2 md:px-0'>
        <div className="user ">
            <div className="pfp w-[30px] h-[30px] bg-red-500 rounded-full"></div>
        </div>
  <form action="" className='w-full flex items-center gap-2'>
       <input type="text"  className='bg-zinc-900 flex-1 rounded-lg py-2 px-1' placeholder='Add a comment'/>
       <Image src='/emoji.png' width={20} height={10} alt=''/>
  </form>
    </div>
  )
}

export default AddComment