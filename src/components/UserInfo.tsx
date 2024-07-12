import React from 'react'
import FollowBtn from './FollowBtn'

const UserInfo = ({userId}:{userId?:string}) => {
  return (
    <div className='flex flex-col p-2 rounded-md gap-2 bg-zinc-900'>
        <div className="header flex items-center justify-between">
            <p className='capitalize'>user information</p>
            <button className='text-sky-500 text-sm'>see all</button>
        </div>
        <div className="info flex flex-col gap-1">
            <div className="header-info flex items-center gap-2">
            <h1 className='text-xl font-bold'>Username</h1>
            <h6 className='text-sm text-zinc-700 '>@handler</h6>
            </div>
            <p className='bio text-zinc-700 text-sm'>orem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quas aliquam voluptatibus? Tenetur dolorem ut id, fugit assumenda ipsum atque praesentium aspernatur aperiam!</p>
           <div className="additional-info flex flex-col gap-2">
            <p className='flex items-center gap-1'>Living in <strong className='font-bold'>Denver</strong></p>
            <p  className='flex items-center gap-1'>went to  <strong>Lorem High School</strong></p>
            <p  className='flex items-center gap-1'>Works at <strong>Nothing.inc</strong></p>
           </div>
           <div className="footer flex items-center justify-between text-sm">
            <p className='text-sky-500'>website.com</p>
            <p className='text-zinc-700'>Joined at September 11 2001</p>
           </div>
        </div> 
        <div className="footer flex flex-col items-end gap-2">
            <FollowBtn/>
            <button>Block Users</button>
        </div>
    </div>
  )
}

export default UserInfo