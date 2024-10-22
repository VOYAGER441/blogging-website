/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'


const page = ({params}:{params:any}) => {
  console.log(params.slug);

  return (
    <div>
      {params.slug}
    </div>
  );
};

export default page