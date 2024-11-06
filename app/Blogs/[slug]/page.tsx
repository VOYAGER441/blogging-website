/* eslint-disable @typescript-eslint/no-explicit-any */
import AllBlog from '@/app/content/AllBlog';
import BlogDisplay from '@/app/content/BlogDisplay';
// import TopBlog from '@/app/content/TopBlog';
import React from 'react'


const page = ({params}:{params:any}) => {
  // console.log('88888888888888888888');
  
  // console.log(params.slug);
  // console.log('88888888888888888888');

  const decodedSlug = decodeURIComponent(params.slug);

  // console.log('Decoded Slug:', decodedSlug);

  return (
    <div>
      <BlogDisplay slug={decodedSlug}/>
      {/* <hr></hr> */}
      {/* <TopBlog/>
      <hr></hr> */}
      <AllBlog limit={30}/>
    </div>
  );
};

export default page