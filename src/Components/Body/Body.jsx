import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import ResList from "../Utils/resList";
import Shimmer from "./Shimmer";

const Body = () => {
  const [res, setRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  

  async function fetchData() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const jsonData = data.json();
    console.log(jsonData);
  }
  function filterRes() {
    const filteredRes = res.filter((restuarant) => restuarant.avgRating >= 4.5);
    setRes(filteredRes);
  }
  if (res.length === 0) {
    return (
      <div className="flex flex-wrap p-8 gap-10 justify-center">
        {Array.from({ length: 8 }).map((_, index) => (
          <Shimmer key={index}/>
        ))}
        
      </div>
    )
  }
  return (
    <div>
      <div className='pl-8 pt-8'>
        <button className='bg-blue-gray-200 px-7 py-2 rounded-full text-blue-gray-900' onClick={filterRes}>
          Top rated restuarant
        </button>
      </div>
      <div className='flex flex-wrap p-8 gap-10'>
        {res.map((restuarant) => (
          <ResCard props={restuarant} key={restuarant.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
