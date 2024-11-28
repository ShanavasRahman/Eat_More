import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import CardSkeleton from "./CardSkeleton";
import { RiSearchLine } from "react-icons/ri";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Data_Api } from "../../Utils/constants";
import useFetchData from "../../Utils/useFetch";

const Body = () => {
  console.log("im here")
  const [res, setRes] = useState([]);
  const [text, setText] = useState("");
  const [filteredRestuarant, setFilteredRestuarant] = useState([]);
  console.log("body triggered");
  const data = useFetchData();
  useEffect(() => {
    if (data.length > 0) {
      setRes(data);
      setFilteredRestuarant(data);
    }  
  },[data])

  function filterRes() {
    const filteredRes = res.filter((restuarant) => restuarant.avgRating > 4.3);
    setFilteredRestuarant(filteredRes);
  }

  const handleSearch = () => {
    let filteredRes = res.filter((restuarant) =>
      restuarant.name.toLowerCase().includes(text.toLowerCase())
    );
    filteredRes.length > 0
      ? setFilteredRestuarant(filteredRes)
      : toast.error("No restuarants found", { position: "top-right" });
    setText("");
  };

  const handleSearchByEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

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
        <input
          type='text'
          placeholder='Search...'
          value={text}
          className='bg-gray-800/50 text-white placeholder-gray-400 p-2 rounded-l-full  focus:outline-none ml-4'
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyDown={handleSearchByEnter}
        />
        <button
          className='bg-gray-800/50 h text-white py-2 pr-2 focus:border-none rounded-r-full transition-colors duration-300'
          onClick={handleSearch}>
          <RiSearchLine className='w-10 h-6' />
        </button>
      </div>
      <div className='flex flex-wrap p-8 gap-10 justify-center'>
        {filteredRestuarant.map((restuarant) => (
          <Link to={`/resmenu/${restuarant.id}`} key={restuarant.id}>
            <ResCard props={restuarant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
