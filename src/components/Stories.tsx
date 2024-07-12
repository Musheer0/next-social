import React from 'react'
import Story from './Story'

const Stories = () => {
  return (
    <div className='w-full p-2 flex gap-3   bg-zinc-900 rounded-md overflow-auto'>
        {[1,2,3,4,5,6,7,8,9,1,].map((e,i)=>{
            return <Story key={i}/>
        })}
    </div>
  )
}

export default Stories