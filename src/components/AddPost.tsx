import Image from 'next/image'
import React from 'react'
import { IoMdImages } from "react-icons/io";
import { LuVideotape } from "react-icons/lu";
import { FaPoll } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";

const AddPost = () => {
  return (
    <div className='flex flex-wrap items-start w-full gap-2 p-1'>
       <div className="user">
        <div className="profil w-10 h-10 rounded-full bg-zinc-400"></div>
       </div>
       <div className="actions flex flex-col flex-1 ">
        <div className="top flex items-center gap-1 w-full">
          <form action="" className='flex-1'>
            <textarea placeholder='what&apos;s on your mind?' className='text-white bg-zinc-900 rounded-md w-full min-h-20 p-1'></textarea>
          </form> 
            <Image src='/emoji.png' width={20} height={20} alt='emoji-picker'/>
        </div>
            <div className="sub-action flex flex-wrap items-center gap-2 ">
              <button className='flex items-center text-sm gap-1 bg-zinc-800 p-2 rounded-md'>
              <IoMdImages />
                <span>Photo</span>
                </button>
              <button className='flex items-center text-sm gap-1 bg-zinc-800 p-2 rounded-md'>
              <LuVideotape />

                <span>Video</span>
                </button>
              <button className='flex items-center text-sm gap-1 bg-zinc-800 p-2 rounded-md'>
              <FaPoll />
                <span>Poll</span>
                </button>
              <button className='flex items-center text-sm gap-1 bg-zinc-800 p-2 rounded-md'>
              <MdEventNote />
                <span>Events</span>
                </button>
            </div>
       </div>
    </div>
  )
}

export default AddPost