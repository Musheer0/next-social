import React from 'react'
import FriendRequest from './FriendRequest'

const FriendRequests = ({userId}:{userId?:string}) => {
  return (
    <div className='bg-zinc-900  p-2 rounded-md'>
        <div className="header flex items-center justify-between">
        <h1 className='text-lg font-black'>Friend Requests</h1>
        <button className='text-sky-600 text-sm capitalize'>see all</button>
        </div>
        <FriendRequest/>
        <FriendRequest/>
        <FriendRequest/>
        <FriendRequest/>
        <FriendRequest/>
    </div>
  )
}

export default FriendRequests