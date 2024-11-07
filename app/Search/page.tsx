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

import React, { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';

// Dynamically import the component and disable SSR
const AppSearchResult = dynamic(() => import('../content/AppSearchResult'), {
  ssr: false,
});

const Page = () => {
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);

  // Fetch the search value from the URL query parameters
  useEffect(() => {
    const querySearchValue = searchParams.get('searchValue');
    setSearchValue(querySearchValue || '');
  }, [searchParams]);

  return (
    <div>
      <Suspense fallback={<div>Loading search results...</div>}>
        <AppSearchResult searchValue={searchValue} />
      </Suspense>
    </div>
  );
};

export default Page;
