import Image from 'next/image';
import styled from '@emotion/styled';
import { FaRegUser, FaBars } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useState, useContext, useEffect } from 'react';
import CartContext from '../../context/CartContext';
import useLocalStorage from '../../hooks/useLocalStorage';

const Header = () => {
  const router = useRouter();
  const [toggleActive, setToggleActive] = useState(false);
  const [cartsStorage, setCartsStorage] = useLocalStorage('cartsStorage');
  const { carts } = useContext(CartContext);

  useEffect(() => {
    setCartsStorage(JSON.stringify(carts));
  }, [JSON.stringify(carts)]);

  const Nav = styled.ul`
    display: flex;
    @media (max-width: 480px){
      display: none;
      flex-direction: column;
      position: absolute;
      width: 100%;
      text-align: center;
      top: 50px;
      background: var(--background);
      &.active {
        display: flex;
      }
    }
  `;
  const NavItem = styled.li`
    cursor: pointer;
    margin: 0 20px;
    transition: 0.3s;
    font-size: 20px;
    font-weight: 500;
    line-height: 21px;
    &:hover {
      color: var(--primary);
    }
    &.active {
      color: var(--primary);
    }
  `;

  return (
    <div className="Header">
      <button type="button" className="Header__button toggler" onClick={() => setToggleActive(!toggleActive)}>
        <FaBars />
      </button>

      <div className="Logo">
        <Image
          src="/assets/img/nav/icon@2x.svg"
          width="34px"
          height="34px"
          alt="logo"
          className="Logo__img"
        />
        MBK
      </div>

      <Nav className={toggleActive ? 'active' : ''}>
        <NavItem onClick={() => router.push('/')} className={router.route !== '/About' && router.route !== '/Contact' ? 'active' : ''}>Shop</NavItem>
        <NavItem onClick={() => router.push('/About')} className={router.route === '/About' ? 'active' : ''}>About</NavItem>
        <NavItem onClick={() => router.push('/Contact')} className={router.route === '/Contact' ? 'active' : ''}>Contact</NavItem>
      </Nav>

      <div>
        <button type="button" className="Header__button">
          <FaRegUser />
        </button>
        <button type="button" className="Header__button Cart">
          <BsCart3 />
        </button>
      </div>

      <style jsx>
        {`
          .Header {
            position: fixed;
            height: 50px;
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: space-around;
            background: var(--background);
            z-index: 10;
          }

          .Logo {
            display: flex;
            align-items: center;
            font-size: 25px;
            color: var(--primary);
          }

          .Header__button {
            border: none;
            background: none;
            padding: 0;
            margin: 5px;
            margin-right: 0;
            font-size: 24px;
            color: var(--text);
            font-weight: 300;
            transition: 0.3s;
          }

          .Header__button:hover {
            color: var(--primary);
          }

          .Cart::after {
            content: "${carts.length}";
            font-size: 10px;
            color: var(--background);
            background: var(--primary);
            border-radius: 50%;
            padding: 2px 4px;
            text-align: center;
            position: relative;
            left: -10px;
            top: -15px;
          }

          .toggler {
            display: none;
          }

          @media (max-width: 480px){
            .Header {
              justify-content: space-between;
            }
            .Header__button.toggler {
              display: block;
              font-size: 25px;
            }
            .Header__button {
              font-size: 21px;
            }
            .Logo {
              font-size: 22px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Header;
