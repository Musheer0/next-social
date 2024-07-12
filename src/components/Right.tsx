import React from 'react'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import Ads from './Ads'
import dynamic from 'next/dynamic'
const UserInfo = dynamic(()=> import('@/components/UserInfo'), {
  loading: ()=><p>loading</p>
})
const UserMedia = dynamic(()=> import('@/components/UserMedia'), {
  loading: ()=><p>loading</p>
})
const Right = ({userId}:{userId?:string}) => {
  return (
    <div className='flex flex-col gap-2'>
   {userId &&    
    <>
     <UserInfo />
     <UserMedia/>
   </>}
      <FriendRequests/>
      <Birthdays/>
      <Ads/>
    </div>
  )
}

export default Right