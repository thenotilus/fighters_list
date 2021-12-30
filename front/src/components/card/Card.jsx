import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="p-2 flex bg-gray-700 items-center rounded-md gap-4">
      <div className="w-20 mr-5">
        <img
          src={
            item.image.length > 0
              ? item.image
              : 'https://www.sherdog.com/image_crop/200/300/_images/fighter_large_default.jpg'
          }
          alt=""
          className="w-full"
        />
      </div>
      <div className="flex justify-around w-full">
        <div className="text-left">
          {item.name ? <p>Name : {item.name}</p> : null}
          {item.nickname ? <p>Nickname : {item.nickname}</p> : null}
          {item.ufc_position ? <p>Position : #{item.ufc_position}</p> : null}
        </div>
        <div className="text-left">
          {item.Wins ? <p>Wins : {item.Wins}</p> : null}
          {item.Losses ? <p>Losses : {item.Losses}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
