/* eslint-disable no-param-reassign */
/* eslint-disable no-const-assign */
/* eslint-disable no-return-assign */
import { useState } from 'react';
import styled from '@emotion/styled';
import { css, cx } from '@emotion/css';
import { useTheme } from '@emotion/react';

const Quantity = ({ setItemNum, itemNum }) => {
  const theme = useTheme();

  const Quantity = styled.div`
  width: 75px;
  height: fit-content;
  display: flex;
  margin: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  `;

  const QuantityBtn = styled.button`
  background: none;
  color: ${theme.colors.primary};
  font-size: 18px;
  font-weight: 400;
  border: none;
  padding: 0;
  width: 25px;
  height: 30.5px;
  margin: 0;
  transition: 0.3s;
  &:hover {
  background: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  }
  &:disabled {
    color: #888;
  }
  &:disabled:hover {
    background: none;
    color: #666;
  }
  `;

  return (
    <Quantity>
      <div className={css`height: 100%; width: 100%; display: flex; justify-content: space-between; align-items: center; border: 1px solid ${theme.colors.primary}; cursor: pointer;`}>
        <QuantityBtn type="button" onClick={() => setItemNum(itemNum += 1)}>+</QuantityBtn>
        <div>{itemNum}</div>
        <QuantityBtn type="button" onClick={() => setItemNum(itemNum -= 1)} disabled={itemNum === 1}>-</QuantityBtn>
      </div>
    </Quantity>
  );
};

export default Quantity;
