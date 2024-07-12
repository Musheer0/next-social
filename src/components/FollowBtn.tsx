"use client"
import React from 'react'

const FollowBtn = ({targetId}:{targetId?:string}) => {
  return (
   <button className='w-full px-4 rounded-md bg-sky-500 font-semibold py-2'>Follow</button>
  )
}

export default FollowBtn