/* eslint-disable no-restricted-globals */
import { css } from '@emotion/css';
import { useTheme } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Stepper from 'react-stepper-horizontal/lib/Stepper';
import { ADD_ORDERS_ACTION } from '../../../../actions';
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
  const [delivaryInfo, setDelivaryInfo] = useState({});
  const [delivaryInfoError, setDelivaryInfoError] = useState(false);

  useEffect(() => {
    if (carts.length === 0) {
      router.push('/');
      console.log('carts', carts);
    } else {
      console.log('carts', carts);
    }
  }, []);

  const handleOnChange = (name, e) => {
    setDelivaryInfo({
      ...delivaryInfo,
      [name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      delivaryInfo.name
      && delivaryInfo.name.length !== 0
      && delivaryInfo.address
      && delivaryInfo.address.length !== 0
      && delivaryInfo.city
      && delivaryInfo.city.length !== 0
      && delivaryInfo.postalCode
      && delivaryInfo.postalCode.length !== 0
      && delivaryInfo.province
      && delivaryInfo.province.length !== 0
    ) {
      ADD_ORDERS_ACTION(dispatch, { carts, delivary: delivaryInfo });
      router.push('/Account/Cart/Delivery/Payment');
    } else {
      setDelivaryInfoError(true);
    }
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
      <div className="Delivary">
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
          />
          <Input
            size="small"
            placeholder="Postal Code"
            onChange={() => handleOnChange('postalCode', event)}
          />
          <Input
            size="small"
            placeholder="Province"
            onChange={() => handleOnChange('province', event)}
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
            onClick={handleSubmit}
            varaint="contained"
            size="small"
            styles="width: auto; margin: 10px 20px;"
          >
            Go to Payment
          </Button>
        </div>
      </div>

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
