import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { BsPower, BsShop } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import { MdOutlineArticle } from 'react-icons/md';
import { GiShoppingCart } from 'react-icons/gi';
import { LOG_OUT_ACTION } from '../../actions';

const UserMenu = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();
  const [toggleActive, setToggleActive] = useState(false);

  const MenuBtn = styled.li`
    cursor: pointer;
    width: 100%;
    padding: 0;
    transition: 0.3s;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 21px;
    list-style: none;
    background: ${theme.colors.background};
    border: 1px solid ${theme.colors.primary};
    border-top: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    &:hover {
      color: ${theme.colors.primary};
    }
    &.active {
      color: ${theme.colors.background};
      background: ${theme.colors.primary};
    }
    &.error {
      color: ${theme.colors.error};
    }
    @media (max-width: 560px) {
      height: 43px;
    }
  `;

  const MenuBtnIcon = styled.div`
    font-size: 1.4rem;
    padding: 10px 15px;
    margin: 0;
    text-align: center;
    @media (max-width: 560px) {
      font-size: 1.1rem;
      padding: 0 10px;
      padding-top: 5px;
    }
  `;
  const MenuBtnText = styled.div`
    font-size: 1.1rem;
    @media (max-width: 560px) {
      padding: 0 10px;
      padding-top: 5px;
    }
  `;
  const MenuToggleIcon = styled.div`
  font-size: 1.5rem;
  padding: 10px 15px;
  margin: 0;
  text-align: center;
  display: none;
  @media (max-width: 560px) {
    display: block;
    font-size: 1.1rem;
    padding: 10px 10px;
  }
  `;
  return (
    <div className={`menu ${toggleActive ? 'active' : ''}`}>
      <MenuBtn
        onClick={() => setToggleActive(!toggleActive)}
      >
        <MenuToggleIcon>
          {toggleActive
            ? <AiOutlineClose />
            : <AiOutlineBars />}
        </MenuToggleIcon>
      </MenuBtn>
      <MenuBtn
        onClick={() => router.push('/Account')}
        className={router.route === '/Account' ? 'active' : ''}
      >
        <MenuBtnIcon><GiShoppingCart /></MenuBtnIcon>
        <MenuBtnText>Orders</MenuBtnText>
      </MenuBtn>

      <MenuBtn className="error" onClick={() => LOG_OUT_ACTION(dispatch)}>
        <MenuBtnIcon><BsPower /></MenuBtnIcon>
        <MenuBtnText>Log Out</MenuBtnText>
      </MenuBtn>

      <style jsx>
        {`
          .menu {
            z-index: 10;
            width: 10rem;
            display: flex;
            position: fixed;
            flex-direction: column;
            align-items: flex-start;
            border-top: 1px solid ${theme.colors.primary};
            margin: 5px;
            overflow: hidden;
            transition: 0.5s;
            width: 18rem;
            left: 0;
          }

          @media (max-width: 560px) {
            .menu {
              max-width: 40px;
              margin: 0;
            }
            .menu.active {
              max-width: 10rem;
            }
          }
      `}
      </style>
    </div>
  );
};

export default UserMenu;
