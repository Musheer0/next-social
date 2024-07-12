import React from 'react'
import Stories from './Stories'
import AddPost from './AddPost'
import Feed from './Feed'

const Middle = () => {
  return (
    <div>
        <div className="child h-full flex flex-col gap-2">
            <Stories/>
            <AddPost/>
            <Feed/>
        </div>
    </div>
  )
}

export default Middle