import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { RiSearchLine } from "react-icons/ri";
import toast from "react-hot-toast";

const Body = () => {
  const [res, setRes] = useState([]);
  const [text, setText] = useState("");
  const [FilteredRestuarant, setFilteredRestuarant] = useState([]);
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
      setFilteredRestuarant(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function filterRes() {
    const filteredRes = res.filter((restuarant) => restuarant.avgRating > 4.3);
    setRes(filteredRes);
  }

  // if (res.length === 0) {
  //   return (
  //     <div className='flex flex-wrap p-8 pt-16 gap-10'>
  //       {Array.from({ length: 10 }).map((_, index) => (
  //         <Shimmer key={index} />
  //       ))}
  //     </div>
  //   );
  // }

  return res.length == 0 ? (
    <div className='flex flex-wrap p-8 pt-16 gap-10'>
      {Array.from({ length: 10 }).map((_, index) => (
        <Shimmer key={index} />
      ))}
    </div>
  ) : (
    <div>
      <div className='pl-8 pt-8 flex'>
        <button
          className='bg-blue-gray-200 px-7 py-2 rounded-full text-blue-gray-900'
          onClick={filterRes}>
          Top rated restuarant
        </button>
        <input
          type='text'
          placeholder='Search...'
          value={text}
          className='bg-gray-800/50 text-white placeholder-gray-400 p-2 rounded-l-full  focus:outline-none ml-4'
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          className='bg-gray-800/50 h text-white py-2 pr-2 focus:border-none rounded-r-full transition-colors duration-300'
          onClick={() => {
            let filteredRes = res.filter((restuarant) =>
              restuarant.name.toLowerCase().includes(text.toLowerCase())
            );
            filteredRes.length > 0 ? setFilteredRestuarant(filteredRes) : toast.error("No restuarants found", { position: "top-right" });
            setText("");
          }}>
          <RiSearchLine className='w-10 h-6' />
        </button>
      </div>
      <div className='flex flex-wrap p-8 gap-10'>
        {FilteredRestuarant.map((restuarant) => (
          <ResCard props={restuarant} key={restuarant.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
