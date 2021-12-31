import React from 'react';

const Card = ({ item }) => {
  return (
    <div
      className={`p-2 flex ${
        item.factorien
          ? 'bg-gray-800 border-gray-600'
          : 'bg-gray-600 border-gray-800'
      } items-center rounded-md gap-4 border-2`}
    >
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
          {item.ufc_position ? (
            <p className="text-red-500 font-bold">UFC #{item.ufc_position}</p>
          ) : null}

          {item.name ? <p className="text-lg">{item.name}</p> : null}
          {item.nickname ? (
            <p className="text-sm text-gray-200">{item.nickname}</p>
          ) : null}
          {item.Wins || item.Losses ? (
            <p className="">
              {item.Wins} - {item.Losses}
            </p>
          ) : null}
        </div>
        <div className="">
          {item.weight_class ? (
            <p className="font-light">{item.weight_class}</p>
          ) : null}
          {item.factorien ? <p>Factorien</p> : <p>Non Factorien</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
