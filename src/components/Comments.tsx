import React from 'react'
import AddComment from './AddComment'
import Comment from './Comment'

const Comments = () => {
  return (
    <div className='flex flex-col gap-2 px-2 md:px-0'>
        <AddComment/>
        <hr className='border-zinc-900'/>
         <Comment/>
    </div>
  )
}

export default Comments