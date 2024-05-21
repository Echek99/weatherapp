'use client';

import { useState } from 'react';
import Link from 'next/link';

const Searchbar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <div className='flex justify-center pt-10 flex-col items-center'>
      <Link href="/capitals">
        CAPITALS
      </Link>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search for a location"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Searchbar;
