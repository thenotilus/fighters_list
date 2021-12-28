import React, { useRef } from 'react';

const DraggableListItem = (props) => {
  const itemRef = useRef(null);

  const onDragStart = (e) => {
    if (props.onDragStart) {
      props.onDragStart(props.index);
    }
  };

  // event when drag over item
  const onDragEnter = () => itemRef.current.classList.add('dragover');

  // event when drag leave item
  const onDragLeave = () => itemRef.current.classList.remove('dragover');

  // add event for item can drop
  const onDragOver = (e) => e.preventDefault();

  // event when drop
  const onDrop = () => {
    itemRef.current.classList.remove('dragover');
    props.onDrop(props.index);
  };

  return (
    <li
      ref={itemRef}
      className="draggable-list__item"
      draggable={props.draggable !== undefined ? props.draggable : true}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {props.children}
    </li>
  );
};

export default DraggableListItem;
