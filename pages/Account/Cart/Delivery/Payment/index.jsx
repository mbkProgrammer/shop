/* eslint-disable no-restricted-globals */
import { css } from '@emotion/css';
import { useTheme } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Stepper from 'react-stepper-horizontal/lib/Stepper';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { UPDATE_CART } from '../../../../../actions';
import {
  Button, Space, Typography,
} from '../../../../../components';

const Payment = () => {
  const theme = useTheme();
  const router = useRouter();
  const { delivary, payment, carts } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const [loadPayment, setLoadPayment] = useState(false);

  useEffect(() => {
    UPDATE_CART(dispatch, { carts: [] });
    setLoadPayment(true);
  }, []);

  return (
    <div
      className={css`
        padding: 10px;
        max-width: 100vw;
      `}
    >
      {loadPayment
        ? (
          <>
            <header className="Header">
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
              <Stepper
                defaultTitleColor={`${theme.colors.primary}`}
                activeColor={`${theme.colors.primary}`}
                completeColor={`${theme.colors.primary}`}
                activeTitleColor={`${theme.colors.primary}`}
                completeTitleColor={`${theme.colors.primary}`}
                steps={[
                  {
                    title: 'Carts',
                  },
                  { title: 'Delivary' },
                  { title: 'Payment' },
                ]}
                activeStep={2}
              />
            </header>
            <Space />
            <Space />
            <Space />

            <div
              className={css`
      text-align: center;
      max-width: 500px;
      margin: auto;
      `}
            >
              <AiOutlineCheckCircle size="6em" color={theme.colors.primary} />
              <Typography variant="h2">Payment Confirmed</Typography>
              <Space />
              <Typography variant="body1">
                Thank you for buying . The nature is grateful to you. Now
                that your order is confirmed it will be ready to ship in 2 days.
              </Typography>
              <Space />
              <Button varaint="contained" onClick={() => router.push('/')}>Back to Shopping</Button>
            </div>
          </>
        )
        : <>loading ...</>}
      <style jsx>
        {`
          .Header {
            max-width: 95vw;
            margin: auto;
          }
          .Logo {
            display: flex;
            align-items: center;
            font-size: 25px;
            color: ${theme.colors.primary};
          }
        `}
      </style>
    </div>
  );
};

export default Payment;
