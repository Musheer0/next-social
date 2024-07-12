import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

const FriendRequest = () => {
  return (
    <div className='flex justify-between w-full items-center py-2 '>
        <div className="users flex items-center gap-2">
            <div className="pfp w-[30px] h-[30px] bg-red-500 rounded-full"></div>
            <p>username</p>
        </div>
        <div className="action flex items-center gap-2">
            <button>
                <FaCheckCircle/>
            </button>
            <button>
            <FaRegTimesCircle />

            </button>
        </div>
    </div>
  )
}

export default FriendRequest