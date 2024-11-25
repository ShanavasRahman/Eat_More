import React from "react";
import ResCard from "./ResCard";
import ResList from "../Utils/resList";

const Body = () => {
  return (
    <div>
      <div className='pl-8 pt-8'>
        <button className='bg-neutral-500 px-7 py-2 rounded-full text-neutral-50'>
          Top rated restuarant
        </button>
      </div>
      <div className='flex flex-wrap p-8 gap-10'>
        {ResList.map((restuarant) => (
          <ResCard props={restuarant} key={restuarant.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
