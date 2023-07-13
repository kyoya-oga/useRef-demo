import React, { Ref } from 'react';

import Item from './Item';

interface ListProps {
  items: string[];
  itemRefs: Ref<HTMLLIElement>[];
}

const List: React.FC<ListProps> = ({ items, itemRefs }) => (
  <ul className='space-y-5'>
    {items.map((item, i) => (
      <Item key={item} ref={itemRefs[i]} item={item} />
    ))}
  </ul>
);

export default List;
