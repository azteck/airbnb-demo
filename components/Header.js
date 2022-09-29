import Image from 'next/image';
import Link from 'next/link';
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setnumOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput('');
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 text-gray-800">
      {/* left */}

      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Link href="/">
          <Image
            src="https://links.papareact.com/qd3"
            layout="fill"
            alt="banner-image"
            objectFit="contain"
            objectPosition="left"
          />
        </Link>
      </div>

      {/* middle - Search*/}

      <div className="flex items-center md:border-1 rounded-full py-2 shadow-lg">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-3 pr-5 bg-transparent outline-none text-gray-500 placeholder-gray-400"
          type="text"
          placeholder={placeholder || 'Start your search'}
        />
        <SearchIcon className="hidden lg:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right */}
      <div className="flex items-center justify-end space-x-4 ">
        <p className="hidden lg:inline text-gray-500 cursor-pointer">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 text-gray-600 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 text-gray-600" />
          <UserCircleIcon className="h-6 text-gray-600" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-1">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b">
            <h2 className="text-xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              min={1}
              max={6}
              className="w-12 pl-2 text-lg outline-none bg-white text-red-400 font-semibold "
              value={numOfGuests}
              onChange={(e) => setnumOfGuests(e.target.value)}
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
