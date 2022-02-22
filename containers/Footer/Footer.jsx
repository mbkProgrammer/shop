/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import { css, cx } from '@emotion/css';
import { useRouter } from 'next/router';
import { useTheme } from '@emotion/react';

const Footer = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <div className="Footer">
      <div className="Footer__content">
        <div
          className={css`
            display: flex;
            flex-direction: column;
          `}
        >
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
          Consectetur ea amet qui ut officia non deserun
        </div>
        <ul className="pages--list">
          <li onClick={() => router.push('/')}>Shop</li>
          <li onClick={() => router.push('/About')}>About</li>
          <li onClick={() => router.push('/Contact')}>Contact</li>
        </ul>
      </div>

      <style jsx>
        {`
          .Footer {
            background: ${theme.colors.text};
            max-width: 100vw;
            padding: 3vw 5vh;
          }
          .Footer .Footer__content {
            color: ${theme.colors.secondary};
            border-top: 3px solid ${theme.colors.secondary};
            padding-top: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .Logo {
            display: flex;
            align-items: center;
            font-size: 25px;
            color: ${theme.colors.primary};
            margin-bottom: 15px;
          }
          .pages--list {
            display: flex;
            width: 40vw;
            height: 100%;
            justify-content: space-between;
            align-items: center;
            list-style: none;
          }

          .pages--list li {
            color: ${theme.colors.primary};
            font-size: 18px;
            line-height: 25px;
            cursor: pointer;
            padding: 10px;
          }

          @media (max-width: 480px){
            .pages--list {
              justify-content: center;
            }
            .Footer .Footer__content {
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
