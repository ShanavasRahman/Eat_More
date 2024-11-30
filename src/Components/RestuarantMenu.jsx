import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CardSkeleton from "./Body/CardSkeleton";
import { Image_Url } from "../Utils/constants";
import { FiChevronUp,FiChevronDown } from "react-icons/fi";
import RecFoods from "./RecFoods";
import resDetails from "./useContextApi";


const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(false);
  const { id } = useParams();
  let restaurant = [];

  //Using contextapi here
  const { restuarants } = useContext(resDetails);
  
  //Before implementing contextapi used this custom hook for fetching;
  // const restuarants = useFetchData();

  if (restuarants.length > 0) {
    const filteredRes = restuarants.filter((res) => res.id === id);
    restaurant = filteredRes[0];
  }

  if (restaurant.length === 0) {
    return (
      <div className='flex justify-center bg-gray-500 p-4 gap-32 flex-wrap'>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  }

  const handleData = () => {
    setShowItems(!showItems);
  };

  return (
    <div className='p-6 bg-gray-300 h-auto w-8/12 m-auto rounded-md my-8'>
      {/* Hero Section */}
      <div className='bg-gray-100 shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row justify-center py-6'>
        {/* Image Section */}
        <img
          className='lg:w-1/4 w-full h-auto object-fill rounded-xl'
          src={`${Image_Url + restaurant.cloudinaryImageId}`}
          alt={restaurant.name}
        />
        {/* Details Section */}
        <div className='lg:w-1/2 p-6 flex flex-col justify-center'>
          <h1 className='text-4xl font-bold text-gray-800'>
            {restaurant.name}
          </h1>
          <p className='text-gray-600 mt-2'>{restaurant.locality}</p>
          <div className='mt-4 flex items-center'>
            <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded'>
              {`Rating: ${restaurant.avgRating}`}
            </span>
            <span className='text-gray-500 text-sm'>{`${restaurant.totalRatingsString} reviews`}</span>
          </div>
          <p className='mt-4 text-gray-700'>{restaurant.cuisines.join(", ")}</p>
          <p className='mt-2 text-gray-500'>{`Cost for two: ${restaurant.costForTwo}`}</p>
        </div>
      </div>

      {/* Recommended Foods Section */}
      <div className='mt-8'>
        <div
          className='flex justify-between items-center  hover:cursor-pointer shadow-xl my-3 px-2 rounded-lg'
          onClick={handleData}>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
            Recommended Foods
          </h2>
          <span className='text-2xl'>{showItems ? <FiChevronUp/> : <FiChevronDown/>}</span>
        </div>

        {showItems && (
          <div className="flex flex-col gap-6">
            {restaurant.recommendedFood?.map((food, index) => (
              <RecFoods food={food} cloudinaryImageId={restaurant.cloudinaryImageId} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
