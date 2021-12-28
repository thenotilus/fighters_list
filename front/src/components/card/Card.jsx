import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="p-2 flex bg-gray-700 items-center justify-between rounded-md">
      <div className="w-20 mr-5">
        <img src={item.image} alt="" className="w-full" />
      </div>
      <div className="">
        <p>{item.name}</p>
        {item.ufc_position ? <p>Position : #{item.ufc_position}</p> : null}
      </div>
      <button class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Card;
