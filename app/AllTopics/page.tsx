import React from 'react'
import AllBlog from '../content/AllBlog'

const page = () => {
  return (
    <div className=''>
        <AllBlog limit={100}/>
    </div>
  )
}

export default page