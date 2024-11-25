import React, { useState } from "react";
import ResCard from "./ResCard";
import ResList from "../Utils/resList";

const Body = () => {
  const [res, setRes] = useState(ResList);
  function filterRes() {
    console.log("hello")
    const filteredRes = res.filter((restuarant) => restuarant.avgRating >= 4.5);
    setRes(filteredRes);
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
