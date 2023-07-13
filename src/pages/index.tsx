import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import List from '@/components/List';

export default function HomePage() {
  const cartItems = ['item1', 'item2', 'item3'];

  const itemRefs = React.useRef<React.RefObject<HTMLLIElement>[]>([]);
  itemRefs.current = cartItems.map(
    (_, i) => itemRefs.current[i] ?? React.createRef()
  );

  console.log(itemRefs.current);

  function handleClick() {
    if (itemRefs.current && itemRefs.current[0].current) {
      itemRefs.current[0].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }

  return (
    <Layout>
      <List items={cartItems} itemRefs={itemRefs.current} />
      <Button className='mt-10' onClick={handleClick}>
        Scroll
      </Button>
    </Layout>
  );
}
