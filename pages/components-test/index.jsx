import { css, cx } from '@emotion/css';
import {
  Button, Input, Quantity, Dropdown, Card,
} from '../../components';

export default function components() {
  const datalists = [
    {
      name: 'mbk',
      value: 'mbk',
    },
    {
      name: 'ali',
      value: 'ali',
    },
    {
      name: 'reza',
      value: 'reza',
    },
  ];
  return (
    <div
      className={css`
        padding-bottom: 100px;
      `}
    >
      <Button varaint="text">button</Button>
      <Button varaint="text" big>
        button
      </Button>
      <br />
      <Button varaint="outlined">button</Button>
      <Button varaint="outlined" big>
        button
      </Button>
      <br />
      <Button varaint="contained">button</Button>
      <Button varaint="contained" big>
        button
      </Button>
      <br />
      <br />

      <Input placeholder="input" size="big" />
      <br />
      <Input placeholder="input" size="medium" />
      <br />
      <Input placeholder="input" size="small" />
      <br />
      <br />
      <br />
      <Quantity />
      <br />
      <br />
      <Dropdown datalists={datalists} />
      <br />
      <Dropdown datalists={datalists} size="small" />
      <br />
      <br />
      <br />
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          @media (max-width: 480px) {
            flex-direction: column;
          }
        `}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
