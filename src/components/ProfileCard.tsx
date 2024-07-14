import React, { use } from 'react'
import prisma from '../../db'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'

const ProfileCard = async() => {
  const userId = auth().userId
  let user
 if(userId)
    user = await prisma.user.findUnique({where: {id: userId as string},include: {_count: {select:{followers: true}}}})
  return (
    <div className='p-2 bg-zinc-900 rounded-md flex flex-col gap-2 items-center justify-center'>
        <div className="user-images  w-full">
            <div className="banner relative w-full h-[70px] rounded-lg bg-yellow-500 ">
          {user?.cover &&    <Image src={user?.cover as string} alt={user?.username+ '&apos; cover pic'} layout='fill'  />}
            <div className="pfp absolute w-10 h-10  left-1/2 -translate-x-1/2 -bottom-1/2 -translate-y-1/4 bg-red-500 rounded-full">
            <Image src={user?.avatar as string} width={40} height={40} className='rounded-full object-cover' alt={user?.username+ '&apos; profile pic'} />
            </div>
            </div>
        </div>
        <div className="user-info flex flex-col w-full items-center">
            <p className='font-semibold pt-4'>{user?.username}</p>
            <p className='text-xs text-zinc-500'>{user?._count.followers} followers</p>
           </div>
           <Link href={'/profile/'+ userId}>
           <button className='px-2 py-2  rounded-md text-[12px] bg-sky-500'>My Profile</button>
           </Link>
    </div>
  )
}

export default ProfileCard