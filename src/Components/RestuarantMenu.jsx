import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Body/Shimmer';
import { Image_Url } from '../Utils/constants';


const RestaurantMenu = () => {
    const [res, setRes] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const response = await fetch("https://raw.githubusercontent.com/ShanavasRahman/data/refs/heads/master/cardData.json");
      const data = await response.json();
      const filteredRes = data.filter((res) => res.id == id);
      setRes(filteredRes);
    };
  
    if (res.length === 0) {
      return (
        <div className="flex justify-center bg-gray-500 p-4 gap-32 flex-wrap">
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </div>
      );
    }
  
    const restaurant = res[0]; // Take the first restaurant from the filtered list
    console.log(restaurant.recommendedFoods);
  
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
          {/* Hero Section */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row justify-center">
            {/* Image Section */}
            <img
              className="lg:w-1/4 w-full h-96 object-fill rounded-xl"
              src={`${Image_Url + restaurant.cloudinaryImageId}`}
              alt={restaurant.name}
            />
            {/* Details Section */}
            <div className="lg:w-1/2 p-6 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800">{restaurant.name}</h1>
              <p className="text-gray-600 mt-2">{restaurant.locality}</p>
              <div className="mt-4 flex items-center">
                <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                  {`Rating: ${restaurant.avgRating}`}
                </span>
                <span className="text-gray-500 text-sm">{`${restaurant.totalRatingsString} reviews`}</span>
              </div>
              <p className="mt-4 text-gray-700">{restaurant.cuisines.join(", ")}</p>
              <p className="mt-2 text-gray-500">{`Cost for two: ${restaurant.costForTwo}`}</p>
            </div>
          </div>
    
          {/* Recommended Foods Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommended Foods</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurant.recommendedFood?.map((food, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    className="w-full h-40 object-cover"
                    src={`${Image_Url + restaurant.cloudinaryImageId}`}
                    alt={food.name}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800">{food.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{food.description}</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-green-600 font-semibold">{`₹${food.price}`}</span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                        {`Rating: ${food.rating}`}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
  
  export default RestaurantMenu;
  
  

