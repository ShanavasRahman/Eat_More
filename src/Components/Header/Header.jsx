import { BsCart3 } from "react-icons/bs";
import { RiMenu3Line, RiSearchLine } from "react-icons/ri";
import { Logo_Url } from "../../Utils/constants";
import { Link } from "react-router-dom";
import { CiWifiOn } from "react-icons/ci";
import { CiWifiOff } from "react-icons/ci";
import useOnlineStatus from "../../Utils/useStatus";
import { useContext, useState } from "react";
import resDetails from "../useContextApi";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const { setFilteredRestuarant, restuarants } = useContext(resDetails);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //Custom hook for online status
  const onlineStatus = useOnlineStatus();

  const handleSearch = () => {
    const filteredRes = restuarants.filter((restuarant) =>
      restuarant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    filteredRes.length > 0
      ? setFilteredRestuarant(filteredRes)
      : toast.error("Restuarant not found", { position: "top-right" });
    setSearchText("");
  };

  const handleSearchByEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const cart = useSelector((state) => state.cart.items);

  return (
    <header className='bg-black/50 backdrop-blur-md text-white sticky top-0 z-50 shadow-[0_2.4rem_4.8rem_rgba(0,0,0,0.075)] flex flex-wrap items-center justify-between px-5 md:px-10 py-4'>
      <div className='flex items-center justify-between w-full md:w-auto'>
        <Link to='/'>
          <img
            src={Logo_Url}
            alt='Logo'
            className='w-12 h-12 sm:w-16 sm:h-16 rounded-full hover:scale-110 transition-transform duration-300'
          />
        </Link>

        <button
          className='block md:hidden text-white focus:outline-none'
          onClick={toggleMenu}>
          <RiMenu3Line className='w-8 h-8' />
        </button>
      </div>

      <div className='flex items-center w-full mt-4 md:mt-0 md:w-auto'>
        <input
          type='text'
          placeholder='Search...'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleSearchByEnter}
          className='bg-gray-800/50 text-white placeholder-gray-400 p-2 rounded-l-full w-full md:w-80 focus:outline-none'
        />
        <button
          className='bg-gray-800/50 h text-white py-2 pr-2 rounded-r-full transition-colors duration-300'
          onClick={handleSearch}>
          <RiSearchLine className='w-10 h-6' />
        </button>
      </div>

      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row items-center mt-4 md:mt-0 w-full md:w-auto`}>
        <ul className='flex flex-col md:flex-row gap-4 md:gap-10 text-lg font-medium'>
          <li className='hover:underline hover:text-yellow-300 transition-colors duration-300 cursor-pointer'>
            <Link to='/'>Home</Link>
          </li>
          <li className='hover:underline hover:text-yellow-300 transition-colors duration-300 cursor-pointer'>
            <Link to='/services'>Services</Link>
          </li>
          <li className='hover:underline hover:text-yellow-300 transition-colors duration-300 cursor-pointer'>
            <Link to='/about'>About</Link>
          </li>
          <li className='hover:underline hover:text-yellow-300 transition-colors duration-300 cursor-pointer'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>

        <div className='flex mx-5 items-center gap-6 mt-4 md:mt-0 md:ml-28 relative'>
          <div className='relative'>
            <Link to='/cart'>
              <BsCart3 className='w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 cursor-pointer text-blue-gray-200' />
            </Link>
            {cart.length > 0 && (
              <div className='absolute -top-2 -right-2 flex justify-center items-center w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full shadow-md'>
                <span>{cart.length}</span>
              </div>
            )}
          </div>

          {onlineStatus ? (
            <CiWifiOn className='text-green-600 w-6 h-6 md:w-10 md:h-10' />
          ) : (
            <CiWifiOff className='text-red-600 w-6 h-6 md:w-10 md:h-10' />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
