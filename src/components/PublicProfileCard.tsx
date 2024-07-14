import { User } from '@prisma/client'
import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const PublicProfileCard = async({user}:{user:User}) => {
  return (
    <div className='flex flx-col items-center w-full gap-2 p-2 rounded-md'>
         <div className='p-2  flex flex-col gap-2 items-center justify-center w-full'>
        <div className="user-images  w-full">
            <div className="banner relative w-full h-[150px] rounded-lg bg-yellow-500">
            {user?.cover &&    <Image src={user?.cover as string} alt={user?.username+ '&apos; cover pic'} layout='fill'  />}

            <div className="pfp absolute w-20 h-20  left-1/2 -translate-x-1/2 -bottom-1/4  bg-red-500 rounded-full">
            <Image src={user?.avatar as string} layout='fill' className='rounded-full object-cover' alt={user?.username+ '&apos; profile pic'} />
            </div>
            </div>
        </div>
        <div className="user-info flex flex-col w-full items-center">
            <p className='font-semibold pt-10 text-lg '>{user?.name || user?.username}</p>
           <div className="info flex items-center gap-5">
           <p className='flex flex-col items-center gap-2'> <span>{ user?._count?.followers}</span> Followers </p>
            <p className='flex flex-col items-center gap-2'><span>{user?._count?.following }</span>Posts</p>
            <p className='flex flex-col items-center gap-2'> <span>{user?._count?.posts}</span>Following</p>
           </div>
           </div>
       
    </div>
    </div>
  )
}

export default PublicProfileCard