/* eslint-disable @typescript-eslint/no-unused-vars */
// // "use client";
// // /* eslint-disable @typescript-eslint/no-explicit-any */
// // import React, { useEffect, useState } from 'react';
// // import { useSearchParams } from 'next/navigation'; // Import to access query parameters
// // import AppSearchResult from '../content/AppSearchResult';

// // const Page = () => {
// //   const searchParams = useSearchParams(); // Get query parameters
// //   const [searchValue, setSearchValue] = useState<string>('');

// //   useEffect(() => {
// //     const querySearchValue = searchParams.get('searchValue');
// //     if (querySearchValue) {
// //       setSearchValue(querySearchValue); // Set the searchValue from the query parameter
// //     }
// //   }, [searchParams]);

// //   console.log("Search value:", searchValue);

// //   return (
// //     <div>
// //       <AppSearchResult searchValue={searchValue} /> {/* Pass the search value */}
// //     </div>
// //   );
// // };

// // export default Page;
// "use client"; // Ensure this is client-side only

// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation"; // Import to access query parameters
// import AppSearchResult from "../content/AppSearchResult";

// const Page = () => {
//   const searchParams = useSearchParams(); // Get query parameters
//   const [searchValue, setSearchValue] = useState<string>("");
//   const [isClient, setIsClient] = useState(false); // To ensure it renders only on the client side

//   useEffect(() => {
//     setIsClient(true); // Set to true after the first render, indicating client-side
//   }, []);

//   useEffect(() => {
//     if (isClient) {
//       const querySearchValue = searchParams.get("searchValue");
//       if (querySearchValue) {
//         setSearchValue(querySearchValue); // Set the searchValue from the query parameter
//       }
//     }
//   }, [isClient, searchParams]); // Dependency on isClient and searchParams

//   if (!isClient) {
//     return null; // Avoid rendering the component until client-side JavaScript is available
//   }

//   console.log("Search value:", searchValue);

//   return (
//     <div>
//       <AppSearchResult searchValue={searchValue} /> {/* Pass the search value */}
//     </div>
//   );
// };

// export default Page;
// page.tsx (SSR version)
// app/Search/page.tsx (Updated version)
// app/Search/page.tsx (Updated version for client-side)

// app/Search/page.tsx (Updated version)
// app/Search/page.tsx
// app/Search/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; // Client-side hook
import AppSearchResult from '../content/AppSearchResult';

const Page = () => {
  const searchParams = useSearchParams(); // Get query parameters from the URL
  const [searchValue, setSearchValue] = useState<string>('');

  // Update searchValue whenever searchParams change
  useEffect(() => {
    const querySearchValue = searchParams.get('searchValue');
    if (querySearchValue) {
      setSearchValue(querySearchValue); // Set the searchValue from the query parameter
    }
  }, [searchParams]);

  console.log("Search value:", searchValue);

  return (
    <div>
      <AppSearchResult searchValue={searchValue} />
    </div>
  );
};

export default Page;
