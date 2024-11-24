
const ResCard = ({props}) => {
    return (
      <div className="bg-gray-300 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 w-64 mb-6">
        <div className="p-5">
          <img
            className="w-52 h-36 object-fill rounded-t-lg"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.cloudinaryImageId}`}
            alt="Restaurant logo"
          />
                <h5 className="text-lg font-semibold mt-4">{ props.name}</h5>
          <p className="text-sm text-gray-600 mt-2">Locality: {props.locality} </p>
          <p className="text-sm text-gray-600">Cost for two:{props.costForTwo} </p>
          <p className="text-sm text-gray-600">Cuisines:{props.cuisines} </p>
          <p className="text-sm text-gray-600">Average rating:{props.avgRating} </p>
          <p className="text-sm text-gray-600">Total ratings:{props.totalRatingsString} </p>
        </div>
      </div>
    );
  };
  
  export default ResCard;
  
