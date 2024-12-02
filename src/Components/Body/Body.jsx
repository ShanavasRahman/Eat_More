import React, { useContext, useEffect, useState } from "react";
import ResCard, { resCardWithPromoted } from "./ResCard";
import CardSkeleton from "./CardSkeleton";
import { Link } from "react-router-dom";
import useFetchData from "../../Utils/useFetch";
import resDetails from "../useContextApi";

const Body = () => {

  //Using context api
  const { filteredRestuarant, setFilteredRestuarant, restuarants, setRestuarants } =
    useContext(resDetails);
  
  const data = useFetchData();

  useEffect(() => {
    if (data.length > 0) {
      setRestuarants(data);
      setFilteredRestuarant(data);
    }
  }, [data]);

  function filterRes() {
    const filteredRes = restuarants.filter((restuarant) => restuarant.avgRating > 4.3);
    setFilteredRestuarant(filteredRes);
  }
  
  //Higher Order Component
  const PromotedResCard = resCardWithPromoted(ResCard);

  return filteredRestuarant.length === 0 ? (
    <div className='flex flex-wrap justify-center p-4 md:p-8 pt-8 md:pt-16 gap-6 md:gap-10 bg-gray-400'>
      {Array.from({ length: 10 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  ) : (
    <div>
      {/* Filter Button Section */}
      <div className='px-4 md:px-12 pt-4 md:pt-8 flex justify-center md:justify-start'>
        <button
          className='bg-blue-gray-200 px-6 md:px-7 py-2 rounded-full text-blue-gray-900 text-sm md:text-base shadow-md hover:bg-blue-gray-300 transition-colors' onClick={filterRes}>
          Top rated restaurant
        </button>
      </div>
  
      {/* Restaurants Display Section */}
      <div className='flex flex-wrap p-4 md:p-8 gap-6 md:gap-10 justify-center'>
        {filteredRestuarant.map((restaurant) => (
          <Link to={`/resmenu/${restaurant.id}`} key={restaurant.id}>
            {restaurant.isPromoted ? (
              <PromotedResCard {...restaurant} />
            ) : (
              <ResCard {...restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
  
};

export default Body;
