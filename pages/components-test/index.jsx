import {
  Button, Input, Quantity, Dropdown,
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
    <div>

      <Button varaint="text">button</Button>
      <Button varaint="text" big>button</Button>
      <br />
      <Button varaint="outlined">button</Button>
      <Button varaint="outlined" big>button</Button>
      <br />
      <Button varaint="contained">button</Button>
      <Button varaint="contained" big>button</Button>
      <br />
      <br />

      <Input placeholder="input" size="big" />
      <br />
      <Input placeholder="input" size="medium" />
      <br />
      <Input placeholder="input" size="small" />
      <br />
      <Input placeholder="input" size="mobile" />
      <br />
      <br />
      <Quantity />
      <br />
      <br />
      <Dropdown datalists={datalists} />
      <br />
      <Dropdown datalists={datalists} size="mobile" />
      <br />
      <Dropdown datalists={datalists} size="small" />
    </div>
  );
}
