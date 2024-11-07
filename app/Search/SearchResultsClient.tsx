// SearchResultsClient.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import AppSearchResult from '../content/AppSearchResult';

const SearchResultsClient = () => {
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    const querySearchValue = searchParams.get('searchValue');
    setSearchValue(querySearchValue || '');
  }, [searchParams]);

  return <AppSearchResult searchValue={searchValue} />;
};

export default SearchResultsClient;
