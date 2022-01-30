import { Button, Input } from '../../components';

export default function components() {
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
    </div>
  );
}
