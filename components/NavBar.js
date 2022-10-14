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
import { parseISO } from 'date-fns';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import LoginSignupModal from './modals/LoginSignupModal';

const { Items, Item, Button } = Menu; // to avoid typing Menu.Item

function NavBar({ placeholder }) {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setnumOfGuests] = useState(1);
  //const [isSearchBoxVisible, setIsSearchBoxVisible] = useState('true');
  const [showModal, setShowModal] = useState(false);

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
        //startDate: parseISO(startDate),
        endDate: endDate.toISOString(),
        //endDate: parseISO(endDate),
        numOfGuests,
      },
    });
    //setIsSearchBoxVisible('false');
    resetInput();
  };

  const handleSignUpLogin = () => {
    console.log('Signup / Login');
    setShowModal(!showModal);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <header className="sticky top-0 z-10 grid grid-cols-3 bg-white shadow-md p-2 sm:p-3 md:px-10 text-gray-800">
      {/* ***************************** Left - LOGO ***************************** */}

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

      {/* ***************************** Center -  Search ***************************** */}

      <div className="flex items-center md:border-1 rounded-full py-2 shadow-lg">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-3 pr-3 bg-transparent outline-none text-gray-500 placeholder-gray-400 text-sm md:text-lg text-clip overflow-hidden"
          type="text"
          placeholder={placeholder || 'Start your search'}
        />
        <SearchIcon className="hidden lg:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* *************** Right - Become a host Text/Icon Links *************** */}
      <div className="inline-flex items-center justify-end space-x-4  ">
        <div className="hidden lg:inline-flex text-lg font-semibold text-gray-500 cursor-pointer">
          Become a host
        </div>
        <GlobeAltIcon className="hidden sm:inline-flex  h-6 text-gray-600 cursor-pointer" />
        {/* <div className="flex items-center space-x-2 border-2 p-2 rounded-full"> */}
        {/* *************** Right - DROPDOWN MENU Login/Signup - https://headlessui.com/react/menu *************** */}

        <Menu as="div" className="relative inline-block text-left ">
          <div>
            {/* <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"> */}
            <Menu.Button className="flex w-full justify-center items-center rounded-full border-2  border-gray-100 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:shadow-md focus:outline-none">
              <MenuIcon className="h-5" />

              <UserCircleIcon
                className="-mr-1 ml-2 h-8 w-8"
                //aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-orange-500 text-white font-semibold'
                          : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={handleSignUpLogin}
                    >
                      Log in
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-orange-500 text-white font-semibold'
                          : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={handleSignUpLogin}
                    >
                      Signup
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-orange-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Host your home
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-orange-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Help
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      {searchInput && (
        <div
          //style={{ display: isSearchBoxVisible ? 'block' : 'none' }}
          //className={isSearchBoxVisible ? 'element-visible' : 'element-hidden'}
          className="flex flex-col col-span-3 mx-auto mt-1 {isSearchBoxVisible ? 'element-visible' : 'element-hidden'}"
        >
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

      <LoginSignupModal showModal={showModal} setShowModal={setShowModal} />
    </header>
  );
}

export default NavBar;
