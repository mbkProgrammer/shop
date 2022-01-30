/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from '@emotion/styled';
import { css, cx } from '@emotion/css';
import { v4 as uuidv4 } from 'uuid';

const Dropdown = ({ label = 'label', datalists = [], size = 'normal' }) => {
  const dropdownId = uuidv4();
  const Dropdown = styled.div`
  -webkit-appearance: none;
    height: 40px;
    width: 445px;
    margin: 2px;
    padding: 0;
    border: 0.5px solid rgba(86, 178, 128, 0.8);
    &:focus {
      border: 1.5px solid rgba(96, 188, 138, 1);
    }
    &:hover {
      border: 1.5px solid rgba(96, 188, 138, 1);
    }
    &.dropdown--small{
      width: 140px;
    }
    &.dropdown--mobile{
      width: 347px;
    }
  `;

  const DropdowonInput = styled.input`
    -o-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    border: none;
    margin: 0;
    margin-top: 10px;
    padding: 0;
    padding-left: 3px;
    &:focus {
      outline: none;
    }
    & {
      background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
        no-repeat right #fafafa;
      background-position-x: 98%;
    }
  `;

  return (
    <Dropdown className={`dropdown--${size}`}>
      <label
        htmlFor={dropdownId}
        className={css`
          height: 9px;
          color: var(--text);
          font-size: 12px;
          margin: 0;
          margin-left: 3px;
          margin-top: 2px;
          padding: 0;
          position: absolute;
        `}
      >
        {label}
      </label>
      <DropdowonInput list="dropDownList" id={dropdownId} type="text" />
      <datalist id="dropDownList" className="datalist">
        {datalists.map((item) => (
          <option value={item.value}>{item.name}</option>
        ))}
      </datalist>
    </Dropdown>
  );
};

export default Dropdown;
