import React from 'react'

const PublicProfileCard = () => {
  return (
    <div className='flex flx-col items-center w-full gap-2 p-2 rounded-md'>
         <div className='p-2  flex flex-col gap-2 items-center justify-center w-full'>
        <div className="user-images  w-full">
            <div className="banner relative w-full h-[150px] rounded-lg bg-yellow-500">
            <div className="pfp absolute w-20 h-20  left-1/2 -translate-x-1/2 -bottom-1/4  bg-red-500 rounded-full"></div>
            </div>
        </div>
        <div className="user-info flex flex-col w-full items-center">
            <p className='font-semibold pt-10 text-lg '>username</p>
           <div className="info flex items-center gap-5">
           <p className='flex flex-col items-center gap-2'> <span>4.5k</span> Followers </p>
            <p className='flex flex-col items-center gap-2'><span>45</span>Posts</p>
            <p className='flex flex-col items-center gap-2'> <span>42</span>Following</p>
           </div>
           </div>
       
    </div>
    </div>
  )
}

export default PublicProfileCard