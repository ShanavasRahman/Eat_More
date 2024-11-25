import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [res, setRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/ShanavasRahman/data/refs/heads/master/data.json"
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch. Status: ${response.status}`);
      }
      const data = await response.json();
      setRes(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function filterRes() {
    const filteredRes = res.filter((restuarant) => restuarant.avgRating > 4.3);
    setRes(filteredRes);
  }



  if (res.length === 0) {
    return (
      <div className='flex flex-wrap p-8 pt-16 gap-10'>
        {Array.from({ length: 10 }).map((_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    );
  }


  return (
    <div>
      <div className='pl-8 pt-8'>
        <button
          className='bg-blue-gray-200 px-7 py-2 rounded-full text-blue-gray-900'
          onClick={filterRes}>
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
