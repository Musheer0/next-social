import React from 'react'
import Links from './Links'
import Ads from './Ads'
import ProfileCard from './ProfileCard'

const Left = () => {
  return (
    <div className='flex flex-col gap-2'>
      <ProfileCard/>
      <Links/>
      <Ads/>
    </div>
  )
}

export default Left