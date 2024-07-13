import React from 'react'

const ProfileCard = () => {
  return (
    <div className='p-2 bg-zinc-900 rounded-md flex flex-col gap-2 items-center justify-center'>
        <div className="user-images  w-full">
            <div className="banner relative w-full h-[70px] rounded-lg bg-yellow-500">
            <div className="pfp absolute w-10 h-10  left-1/2 -translate-x-1/2 -bottom-1/2 -translate-y-1/4 bg-red-500 rounded-full"></div>
            </div>
        </div>
        <div className="user-info flex flex-col w-full items-center">
            <p className='font-semibold pt-2'>username</p>
            <p className='text-xs text-zinc-500'>500 followers</p>
           </div>
           <button className='px-2 py-2  rounded-md text-[12px] bg-sky-500'>My Profile</button>
    </div>
  )
}

export default ProfileCard