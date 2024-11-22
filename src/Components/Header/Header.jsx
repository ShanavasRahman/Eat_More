import { BsCart3 } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';

const Header = () => {
  return (
    <header className="bg-black/50 backdrop-blur-md text-white sticky top-0 z-50 shadow-[0_2.4rem_4.8rem_rgba(0,0,0,0.075)] rounded-[11px] mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div>
          <img 
            src="https://cdn.dribbble.com/userupload/5966432/file/original-03c1fe57f7907074905632cbf187f058.png?resize=400x0" 
            alt="Logo" 
            className="w-16 h-16 rounded-full hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Search Section */}
        <div className="flex items-center">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-gray-800/50 text-white placeholder-gray-400 p-2 rounded-l-full  focus:outline-none focus:ring focus:ring-blue-400"
          />
          <button className="bg-neutral-400 hover:bg-neutral-900 hover:text-white text-black px-1 py-2 pr-2 focus:border-none rounded-r-full transition-colors duration-300">
           <RiSearchLine className='w-10 h-6'/>
          </button>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-8 text-lg font-medium">
            <li className="hover:underline hover:text-yellow-300 transition-colors duration-300 cursor-pointer">Home</li>
            <li className="hover:underline hover:text-yellow-300 transition-colors duration-300 cursor-pointer">Services</li>
            <li className="hover:underline hover:text-yellow-300 transition-colors duration-300 cursor-pointer">About</li>
            <li className="hover:underline hover:text-yellow-300 transition-colors duration-300 cursor-pointer">Contact</li>
            <li>
              <BsCart3 className="w-8 h-8 hover:scale-125 transition-transform duration-300 cursor-pointer text-neutral-900" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
