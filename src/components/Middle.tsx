import React from 'react'
import Feed from './Feed'
import dynamic from 'next/dynamic'
import prisma from '../../db'
import { User } from '@prisma/client'
const Stories = dynamic(()=> import('./Stories'), {
  loading: ()=><p>Loading</p>
})
const AddPost= dynamic(()=> import( './AddPost'), {
  loading: ()=><p>Loading</p>
})
const PublicProfileCard = dynamic(()=> import( './PublicProfileCard'),{
  loading:()=><p>Loading</p>
})
const Middle = ({userId, user}:{userId?:string, user? : User | null}) => {

  return (
    <div>
        <div className="child h-full flex flex-col gap-2">
           {!userId && 
           <>
            <Stories/>
            <AddPost/>
           </>
           }
           {(userId && user) && 
           <>
           <PublicProfileCard user={user}/>
           </>
           }
            <Feed/>
        </div>
    </div>
  )
}

export default Middle