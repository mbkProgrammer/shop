import { css } from '@emotion/css';
import { useTheme } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Stepper from 'react-stepper-horizontal/lib/Stepper';
import {
  Button,
  Input, Space, Textarea, Typography,
} from '../../../../components';

const Delivary = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <div className={css`
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
          steps={[{
            title: 'Carts',
            onClick: () => router.push('/Account/Cart'),
          }, { title: 'Delivary' }, { title: 'Payment' }]}
          activeStep={1}
        />
      </header>

      <Space />
      <Space />
      <div className="Delivary">
        <Typography variant="h4">Shipping Address</Typography>
        <Space />
        <div className="Delivary__form">
          <Input size="medium" placeholder="Name" />
          <Input size="medium" placeholder="Second Name" />
          <Input size="big" placeholder="Address and number" />
          <Textarea placeholder="Shipping Note" size="big" />
          <Input size="small" placeholder="City" />
          <Input size="small" placeholder="Postal Code" />
          <Input size="small" placeholder="Province" />
        </div>
        <Space />
        <div className={css`display: flex; flex-wrap: wrap; width: 100%; justify-content: center; `}>
          <Button varaint="outlined" size="small" styles="width: auto; margin: 10px 20px;">Back to Cart</Button>
          <Button varaint="contained" size="small" styles="width: auto; margin: 10px 20px;">Go to Payment</Button>
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
