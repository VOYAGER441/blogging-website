'use client';

import React, { useState } from 'react';
// import { useSearchParams } from 'next/navigation'; // Import for navigation
import { FaSearch } from 'react-icons/fa';
import styles from './AppSearch.module.scss';
import { useRouter } from 'next/navigation';

const AppSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter(); // This is from 'next/navigation'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue) {
      router.push(`/Search?searchValue=${searchValue}`);
    }
  };

  return (
    <div className="container">
      <div className={`${styles.searchContainer}`}>
        <form className="d-flex me-5" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="form-floating" data-mdb-input-init>
              <input
                type="search"
                id="form1"
                className="form-control"
                placeholder="Search"
                onChange={handleChange}
                value={searchValue}
                style={{ backgroundColor: '#e0e1dd' }}
              />
              <label htmlFor="form1">Search</label>
            </div>
            <button
              type="submit"
              className="btn btn-secondary bg-black"
              data-mdb-ripple-init
            >
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppSearch;
