import React from 'react'
import TopBlog from '../content/TopBlog'

const page = () => {
  return (
    <div>
        <TopBlog limit={50}/>
    </div>
  )
}

export default page