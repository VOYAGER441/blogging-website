"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // Import to access query parameters
import AppSearchResult from '../content/AppSearchResult';

const Page = () => {
  const searchParams = useSearchParams(); // Get query parameters
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    const querySearchValue = searchParams.get('searchValue');
    if (querySearchValue) {
      setSearchValue(querySearchValue); // Set the searchValue from the query parameter
    }
  }, [searchParams]);

  console.log("Search value:", searchValue);

  return (
    <div>
      <AppSearchResult searchValue={searchValue} /> {/* Pass the search value */}
    </div>
  );
};

export default Page;
