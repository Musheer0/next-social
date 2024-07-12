import Image from 'next/image'
import React from 'react'
import Comments from './Comments'

const Post = () => {
  return (
    <div className='flex flex-col gap-2 py-1'>
      <div className="user flex justify-between w-full items-center">
     <div className="user-info flex items-center gap-2">
     <div className="pfp w-10 h-10 rounded-full ring-1"></div>
     <p>username</p>
     </div>
        <button><Image src='/more.png' width={20} height={20} alt=''/></button>
      </div>
      <div className="post-img">
        <div className="img w-full h-[200px] bg-yellow-500"></div>
      </div>
      <div className="caption">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus quam cum porro eius, error dolores adipisci non. Labore, illo?</p>
      </div>
      <div className="actions flex items-center justify-between">
  <div className="left flex items-center gap-2">
  <button className='flex items-center gap-1 bg-zinc-900 rounded-full text-sm px-3 py-1'>
          <Image src='/like.png' width={10} height={10} alt=''/>
            <div className="seperator h-full p-[1px] bg-zinc-700"></div>
          <p className='flex items-center gap-1'>
            <span>123</span>
            <span className='hidden md:inline'>likes</span>
            </p>
        </button>
        <button className='flex items-center gap-1 bg-zinc-900 rounded-full text-sm px-3 py-1'>
          <Image src='/comment.png' width={10} height={10} alt=''/>
            <div className="seperator h-full p-[1px] bg-zinc-700"></div>
          <p className='flex items-center gap-1'>
            <span>123</span>
            <span className='hidden md:inline'>comments</span>
            </p>
        </button>
  </div>

        <button className='flex items-center gap-1 bg-zinc-900 rounded-full text-sm px-3 py-1'>
          <Image src='/share.png' width={10} height={10} alt=''/>
            <div className="seperator h-full p-[1px] bg-zinc-700"></div>
          <p className='flex items-center gap-1'>
            <span>123</span>
            <span className='hidden md:inline'>shares</span>
            </p>
        </button>
      </div>
      <hr className='border-zinc-900'/>
      <Comments/>
    </div>
  )
}

export default Post