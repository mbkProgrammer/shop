import React, { useState } from 'react';
import Quantity from './Quantity';

export default { title: 'components/Quantity' };
export const QuantityTest = () => {
  const [itemNum, setItemNum] = useState(1);
  return (<Quantity itemNum={itemNum} setItemNum={setItemNum} />);
};
