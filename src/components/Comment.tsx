import Image from 'next/image'
import React from 'react'

const Comment = () => {
  return (
    <div className='flex items-start gap-2 px-2 md:px-0 '>
        <div className="user ">
            <div className="pfp w-[30px] h-[30px] bg-red-500 rounded-full"></div>
       
        </div>
        <div className="comment flex flex-col gap-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis, est, fuga illum porro ad distinctio quis soluta in eligendi repudiandae, vitae dolores?</p>
            <div className="actions flex items-center gap-5 px-2 md:px-1">
                <button className='flex items-center gap-2 text-sm bg-zinc-900 rounded-full px-3 py-1'>
                    <Image width={15} height={10} alt='' src='/like.png'/>
                    <span className='flex items-center gap-1'>
                        <span>
                            123
                        </span>
                        | 
                        <span>
                             likes
                        </span>
                    </span>
                </button>
                <button className='text-sm text-zinc-400 font-bold'>reply</button>
            </div>
        </div>
        <Image width={15} height={10} alt=' ' src={'/more.png'}/>
    </div>
  )
}

export default Comment