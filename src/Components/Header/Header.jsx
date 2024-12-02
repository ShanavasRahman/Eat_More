import { BsCart3 } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
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
    <header className=' bg-black/50 backdrop-blur-md text-white sticky top-0 z-50 shadow-[0_2.4rem_4.8rem_rgba(0,0,0,0.075)]  flex justify-around '>
      <div className='container mx-5 flex justify-between items-center py-4 w-full'>
        {/* Logo Section */}
        <div>
          <img
            src={Logo_Url}
            alt='Logo'
            className='w-16 h-16 rounded-full hover:scale-110 transition-transform duration-300'
          />
        </div>

        {/* Search Section */}
        <div className='flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleSearchByEnter}
            className='bg-gray-800/50 text-white placeholder-gray-400 p-2 rounded-l-full  focus:outline-none'
          />
          <button
            className='bg-gray-800/50 h text-white  py-2 pr-2 focus:border-none rounded-r-full transition-colors duration-300'
            onClick={handleSearch}>
            <RiSearchLine className='w-10 h-6' />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className='flex items-center'>
          <ul className='flex gap-10 text-lg font-medium'>
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
          <Link to="/cart">
            <BsCart3 className='w-8 h-8 transition-transform duration-300 cursor-pointer ml-28 text-blue-gray-200' />
          </Link>
          {cart.length > 0 && (
            <div className=' flex justify-center items-center mb-5 opacity-80 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full shadow-md'>
              <span>{cart.length}</span>
            </div>
          )}

          {onlineStatus ? (
            <CiWifiOn className='text-green-600 mx-16 w-10 h-10' />
          ) : (
            <CiWifiOff className='text-red-600 mx-16 w-10 h-10' />
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
