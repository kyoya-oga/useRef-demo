import React, { forwardRef } from 'react';

interface ItemProps {
  item: string;
}
const Item = forwardRef<HTMLLIElement, ItemProps>(({ item }, ref) => {
  return (
    <li
      className='text-dark bg-blue-300 p-5 text-center text-2xl font-bold'
      ref={ref}
    >
      {item}
    </li>
  );
});

export default Item;
