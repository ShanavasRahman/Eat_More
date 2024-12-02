import { useDispatch, useSelector } from "react-redux";
import { Image_Url } from "../Utils/constants";
import { addItem } from "../Utils/cartSlice";

const RecFoods = ({ food, cloudinaryImageId }) => {
  const dispatch = useDispatch();
  const handleCart = (food) => {
    dispatch(addItem(food));
  }
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex items-center'>
      {/* Left Section: Food Details */}
      <div className='p-4 flex-1'>
        <h3 className='text-lg font-bold text-gray-800'>{food.name}</h3>
        <p className='text-gray-600 text-sm mt-1'>{food.description}</p>
        <div className='mt-3 flex items-center gap-4'>
          <span className='text-green-600 font-semibold'>{`${food.price}`}</span>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded'>
            {`Rating: ${food.rating}`}
          </span>
        </div>
      </div>

      {/* Right Section: Food Image */}
      <div className="flex justify-center">
        <img
          className='w-32 h-32 object-cover rounded-r-lg'
          src={`${Image_Url + cloudinaryImageId}`}
          alt={food.name}
        />
        <button
          className='absolute px-4 py-1 bg-gray-700 text-white font-semibold text-xl opacity-90 rounded-xl' onClick={()=>handleCart(food)}>
          +
        </button>
      </div>
    </div>
  );
};

export default RecFoods;
