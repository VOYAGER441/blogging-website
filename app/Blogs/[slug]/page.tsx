/* eslint-disable @typescript-eslint/no-explicit-any */
import AllBlog from '@/app/content/AllBlog';
import BlogDisplay from '@/app/content/BlogDisplay';
// import TopBlog from '@/app/content/TopBlog';
import React from 'react'


const page = ({params}:{params:any}) => {
  console.log(params.slug);

  return (
    <div>
      <BlogDisplay slug={params.slug}/>
      {/* <hr></hr> */}
      {/* <TopBlog/>
      <hr></hr> */}
      <AllBlog/>
    </div>
  );
};

export default page