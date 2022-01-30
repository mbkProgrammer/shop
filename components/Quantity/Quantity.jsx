/* eslint-disable no-const-assign */
/* eslint-disable no-return-assign */
import { useState } from 'react';
import styled from '@emotion/styled';
import { css, cx } from '@emotion/css';

const Quantity = () => {
  const Quantity = styled.div`
  width: 75px;
  height: 61px;
  display: flex;
  margin: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  `;

  const QuantityBtn = styled.button`
  background: none;
  color: var(--primary);
  font-size: 18px;
  font-weight: 400;
  border: none;
  padding: 0;
  width: 25px;
  height: 30.5px;
  margin: 0;
  transition: 0.3s;
  &:hover {
    background: var(--primary);
  color: var(--background);
  }
  `;

  const [quantityNum, setQuantityNum] = useState(0);

  return (
    <Quantity>
      <div className={css`height: 50%;`}>
        Quantity
      </div>
      <div className={css`height: 50%; width: 100%; display: flex; justify-content: space-between; align-items: center; border: 1px solid var(--primary); cursor: pointer;`}>
        <QuantityBtn type="button" onClick={() => setQuantityNum(quantityNum += 1)}>+</QuantityBtn>
        <div>{quantityNum}</div>
        <QuantityBtn type="button" onClick={() => setQuantityNum(quantityNum -= 1)}>-</QuantityBtn>
      </div>
    </Quantity>
  );
};

export default Quantity;
