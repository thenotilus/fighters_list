import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="p-2 flex bg-gray-700 items-center justify-start rounded-md gap-4">
      <div className="w-20 mr-5">
        <img src={item.image} alt="" className="w-full" />
      </div>
      <div className="">
        <p>{item.name}</p>
        {item.ufc_position ? <p>Position : #{item.ufc_position}</p> : null}
      </div>
    </div>
  );
};

export default Card;
