/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { Typography } from '../../components';

const OrderCard = ({
  id = 1,
  title = 'some text',
  body = 'some text',
  date = '1651884806',
}) => {
  const theme = useTheme();
  const router = useRouter();
  const length = 52;
  let newTitle = title;

  if (window && document.body.offsetWidth < 600) {
    newTitle = title.length > length ? `${title.substring(0, length - 3)} ...` : title;
  }
  // console.log('format(date', format(date, 'yyyy-MM-dd'));
  return (
    <div className="OrderCard" onClick={() => router.push(`Blog/${id}`)}>
      <Typography variant="h6" css="color: inherit;">
        cds
      </Typography>
      <div className="OrderCard--click">
        <BsFillArrowRightSquareFill />
      </div>
      <div className="OrderCard__date">csd</div>

      <style>
        {`
        .OrderCard {
          background-color: ${theme.colors.background};
          height: 5rem;
          margin: 10px;
          padding: 10px;
          border: 1px solid ${theme.colors.primary};
          border-radius: 10px;
          color: ${theme.colors.text};
          display: flex;
          max-width: 95vw;
          overflow: hidden;
          position: relative;
          transition: 0.4s;
        }

        .OrderCard:hover{
          background-color: ${theme.colors.primary};
          color: ${theme.colors.background};
        }

        .OrderCard:hover .OrderCard--click{
          opacity: 1;
        }

        .OrderCard--click {
          font-size: 2rem;
          position: absolute;
          right: 0;
          margin-right: 20px;
          height: calc(100% - 20px);
          display: flex;
          align-items: center;
          color: ${theme.colors.background};
          opacity: 0;
          transition: 0.8s;
        }
        .OrderCard__date {
          position: absolute;
          right: 0;
          bottom: 0;
          margin-right: 20px;
          margin-bottom: 5px;
          font-weight: 400;
          font-size: 0.8rem;
        }
      `}
      </style>
    </div>
  );
};

export default OrderCard;
