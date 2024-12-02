import { useDispatch, useSelector } from "react-redux";
import { Image_Url } from "../Utils/constants";
import { addItem } from "../Store/Slices/cartSlice";

const RecFoods = ({ food, cloudinaryImageId }) => {
  const dispatch = useDispatch();
  const handleCart = (food) => {
    dispatch(addItem(food));
  }
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center md:items-stretch'>
      {/* Left Section: Food Details */}
      <div className='p-4 flex-1'>
        <h3 className='text-lg font-bold text-gray-800'>{food.name}</h3>
        <p className='text-gray-600 text-sm mt-1 line-clamp-2'>{food.description}</p>
        <div className='mt-3 flex items-center gap-4'>
          <span className='text-green-600 font-semibold'>{`${food.price}`}</span>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded'>
            {`Rating: ${food.rating}`}
          </span>
        </div>
      </div>
  
      {/* Right Section: Food Image */}
      <div className='relative flex justify-center items-center p-4'>
        <img
          className='w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg'
          src={`${Image_Url + cloudinaryImageId}`}
          alt={food.name}
        />
        <button
          className='absolute bottom-2 right-2 px-3 py-1 bg-gray-700 text-white font-semibold text-sm md:text-lg opacity-90 rounded-lg hover:bg-gray-800 transition-colors'
          onClick={() => handleCart(food)}>
          +
        </button>
      </div>
    </div>
  );
  
};

export default RecFoods;
