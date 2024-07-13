import { link } from 'fs'
import Link from 'next/link'
import path from 'path'
import React from 'react'

const Links = () => {
  const links = [
    {
      name: 'my posts',
      path: '',
      icon: ''
    },
    {
      name: 'activity',
      path: '',
      icon: ''
    },
    {
      name: 'marketplace',
      path: '',
      icon: ''
    },
    {
      name: 'events',
      path: '',
      icon: ''
    },
    {
      name: 'albums',
      path: '',
      icon: ''
    },
    {
      name: 'videos',
      path: '',
      icon: ''
    },
    {
      name: 'news',
      path: '',
      icon: ''
    },
    {
      name: 'courses',
      path: '',
      icon: ''
    },
    {
      name: 'lists',
      path: '',
      icon: ''
    },
  ]
  return (
    <div>
      <div className="links p-2 rounded-md bg-zinc-900 flex flex-col">
             {links.map((e,i)=>{
              return <><Link href={e.path} key={i} className='hover:bg-zinc-800 py-2 px-2 rounded-md'><span></span><span className='capitalize text-sm text-zinc-300'>{e.name}</span></Link></>
             })}
      </div>
    </div>
  )
}

export default Links