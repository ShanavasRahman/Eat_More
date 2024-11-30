import React, { useContext, useEffect, useState } from "react";
import ResCard, { resCardWithPromoted } from "./ResCard";
import CardSkeleton from "./CardSkeleton";
import { RiSearchLine } from "react-icons/ri";
import toast from "react-hot-toast";
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

  return filteredRestuarant.length == 0 ? (
    <div className='flex flex-wrap justify-center p-8 pt-16 gap-10 bg-gray-400'>
      {Array.from({ length: 10 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  ) : (
    <div>
      <div className='pl-12 pt-8 flex '>
        <button
          className='bg-blue-gray-200 px-7 py-2 rounded-full text-blue-gray-900'
          onClick={filterRes}>
          Top rated restuarant
        </button>
      </div>
      <div className='flex flex-wrap p-8 gap-10 justify-center'>
        {filteredRestuarant.map((restuarant) => (
          <Link to={`/resmenu/${restuarant.id}`} key={restuarant.id}>
            {restuarant.isPromoted ? (
              <PromotedResCard {...restuarant} />
            ) : (
              <ResCard {...restuarant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
