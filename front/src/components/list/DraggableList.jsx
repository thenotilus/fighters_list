import React, { useState, useEffect } from 'react';

import DraggableListItem from './DraggableListItem';

import { updateList, deleteFighter } from '../../utils/api';

const DraggableList = ({ data, renderItemContent, setdata, Link }) => {
  //const [data, setdata] = useState(props.data);

  const [dragStartIndex, setdragStartIndex] = useState(null);

  useEffect(() => {
    if (data.length > 0)
      updateList(data).then((res) => {
        setdata(res);
      });
  }, []);

  // get index of draged item
  const onDragStart = (index) => setdragStartIndex(index);

  // update list when item dropped
  const onDrop = (dropIndex) => {
    // get draged item
    const dragItem = data[dragStartIndex];

    // delete draged item in list
    let list = [...data];
    list.splice(dragStartIndex, 1);

    // update list
    if (dragStartIndex < dropIndex) {
      // setdata([
      //   ...list.slice(0, dropIndex - 1),
      //   dragItem,
      //   ...list.slice(dropIndex - 1, list.length),
      // ]);
      updateList([
        ...list.slice(0, dropIndex - 1),
        dragItem,
        ...list.slice(dropIndex - 1, list.length),
      ]).then((res) => {
        setdata(res);
      });
    } else {
      // setdata([
      //   ...list.slice(0, dropIndex),
      //   dragItem,
      //   ...list.slice(dropIndex, list.length),
      // ]);
      updateList([
        ...list.slice(0, dropIndex),
        dragItem,
        ...list.slice(dropIndex, list.length),
      ]).then((res) => {
        setdata(res);
      });
    }
  };

  const onDelete = (index) => {
    let confirmed = window.confirm(
      'Are you sure you want to delete this item?'
    );
    if (confirmed) {
      deleteFighter(index).then((res) => {
        setdata(res);
      });
    }
  };

  return (
    <ul className="overflow-y-auto w-2/5 h-[90vh]">
      {data.map((item, index) => (
        <div key={index}>
          <DraggableListItem
            index={index}
            onDragStart={(index) => onDragStart(index)}
            onDrop={(index) => onDrop(index)}
          >
            {renderItemContent(item)}
          </DraggableListItem>
          <div className="flex w-full justify-evenly m-0 gap-3">
            <Link
              className="p-2 bg-blue-500 rounded-md w-1/2 mr-3 text-center"
              to={`/edit/${item.position}`}
            >
              Détails {item.name}
            </Link>
            <button
              onClick={() => onDelete(item.position)}
              className="p-2 bg-red-500 rounded-md w-1/2 mr-3 text-center font-semibold"
            >
              Supprimer {item.name}
            </button>
          </div>
        </div>
      ))}
      {/*
           add last item so you can drag item to last position
           last item dont need onDragStart because it can not be draged
      */}
      <DraggableListItem
        key={data.length}
        index={data.length}
        draggale={false}
        onDrop={(index) => onDrop(index)}
      />
    </ul>
  );
};

export default DraggableList;
