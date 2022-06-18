/* eslint-disable no-restricted-globals */
import { css } from '@emotion/css';
import { useTheme } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Stepper from 'react-stepper-horizontal/lib/Stepper';
import { async } from 'regenerator-runtime';
import { ADD_ADMIN_ORDERS_ACTION, ADD_ORDERS_ACTION, GET_ORDERS_ACTION } from '../../../../actions';
import {
  Button,
  Input,
  Space,
  Textarea,
  Typography,
} from '../../../../components';

const Delivary = () => {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);
  const { auth } = useSelector((state) => state);
  const [delivaryInfo, setDelivaryInfo] = useState({});
  const [delivaryInfoError, setDelivaryInfoError] = useState(false);

  useEffect(() => {
    if (!auth || !auth.response || !auth.response.id
    ) {
      router.push('/Account/Auth');
    } else if (carts.length === 0) {
      router.push('/');
    }
  }, []);

  const handleOnChange = (name, e) => {
    setDelivaryInfo({
      ...delivaryInfo,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    dispatch(
      ADD_ORDERS_ACTION(auth.response.id, {
        order: carts,
        address: delivaryInfo,
      }),

    );
    dispatch(ADD_ADMIN_ORDERS_ACTION({
      order: carts,
      address: delivaryInfo,
    }));
    router.push('/Account/Cart/Delivery/Payment');
  };

  return (
    <div
      className={css`
        padding: 10px;
        max-width: 100vw;
      `}
    >
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
              onClick: () => router.push('/Account/Cart'),
            },
            { title: 'Delivary' },
            { title: 'Payment' },
          ]}
          activeStep={1}
        />
      </header>

      <Space />
      <Space />
      <form className="Delivary" onSubmit={handleSubmit}>
        <Typography variant="h4">Shipping Address</Typography>
        <Space />
        <div className="Delivary__form">
          {delivaryInfoError
            ? <Typography variant="h6" css={`color: ${theme.colors.error}`}>Check your Delivary Info</Typography>
            : ''}
          <Input
            size="medium"
            placeholder="Name"
            onChange={() => handleOnChange('name', event)}
            required
          />
          <Input
            size="medium"
            placeholder="Second Name(optional)"
            onChange={() => handleOnChange('secondName', event)}
          />
          <Input
            size="big"
            placeholder="Address and number"
            onChange={() => handleOnChange('address', event)}
            required
          />
          <Textarea
            placeholder="Shipping Note(optional)"
            size="big"
            onChange={() => handleOnChange('note', event)}
          />
          <Input
            size="small"
            placeholder="City"
            onChange={() => handleOnChange('city', event)}
            required
          />
          <Input
            size="small"
            placeholder="Postal Code"
            onChange={() => handleOnChange('postalCode', event)}
            required
          />
          <Input
            size="small"
            placeholder="Province"
            onChange={() => handleOnChange('province', event)}
            required
          />
        </div>
        <Space />
        <div
          className={css`
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
          `}
        >
          <Button
            varaint="outlined"
            onClick={() => router.push('/Account/Cart')}
            size="small"
            styles="width: auto; margin: 10px 20px;"
          >
            Back to Cart
          </Button>
          <Button
            varaint="contained"
            size="small"
            styles="width: auto; margin: 10px 20px;"
            type="submit"
          >
            Go to Payment
          </Button>
        </div>
      </form>

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
          .Delivary {
            display: block;
            text-align: center;
          }
          .Delivary__form {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            max-width: 500px;
            margin: auto;
          }
        `}
      </style>
    </div>
  );
};

export default Delivary;
