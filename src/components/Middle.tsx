import React from 'react'
import Feed from './Feed'
import dynamic from 'next/dynamic'
const Stories = dynamic(()=> import('./Stories'), {
  loading: ()=><p>Loading</p>
})
const AddPost= dynamic(()=> import( './AddPost'), {
  loading: ()=><p>Loading</p>
})

const Middle = ({userId}:{userId?:string}) => {
  return (
    <div>
        <div className="child h-full flex flex-col gap-2">
           {!userId && 
           <>
            <Stories/>
            <AddPost/>
           </>
           }
            <Feed/>
        </div>
    </div>
  )
}

export default Middle