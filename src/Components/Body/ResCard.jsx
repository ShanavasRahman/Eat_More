import { Image_Url } from "../../Utils/constants";

const ResCard = (props) => {
  return (
    <div className='bg-gray-300 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 w-64 mb-6'>
      <div className='p-5'>
        <img
          className='w-52 h-36 object-fill rounded-t-lg'
          src={Image_Url + props.cloudinaryImageId}
          alt='Restaurant logo'
        />
        <h5 className='text-lg font-semibold mt-4'>{props.name}</h5>
        <p className='text-sm text-gray-600 mt-2'>
          Locality: {props.locality}{" "}
        </p>
        <p className='text-sm text-gray-600'>
          Cost for two:{props.costForTwo}{" "}
        </p>
        <p className='text-sm text-gray-600'>
          Cuisines:{props.cuisines.join(",")}{" "}
        </p>
        <p className='text-sm text-gray-600'>
          Average rating:{props.avgRating}{" "}
        </p>
        <p className='text-sm text-gray-600'>
          Total ratings:{props.totalRatingsString}{" "}
        </p>
      </div>
    </div>
  );
};

export const resCardWithPromoted = (RestuarantCard) => {
  return (props) => (
    <div className='hover:-translate-y-1'>
      <h1 className="absolute z-10 bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-l-sm after:content-[''] after:absolute after:top-full after:left-0 after:border-t-[6px] after:border-t-gray-800 after:border-l-[6px] after:border-l-transparent after:border-r-[6px] after:border-r-transparent">
        Promoted
      </h1>
      <RestuarantCard {...props} />
    </div>
  );
};

export default ResCard;
