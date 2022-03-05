import React from 'react';
import CartCard from './CartCard';

export default { title: 'containers/CartCard' };
export const CartCardTest = () => (<CartCard imageSrc="https://picsum.photos/250/150.jpg" imageAlt="test" price="10.0" title="this is tittle" path="/write-path-when-onclick" />);
