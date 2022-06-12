import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { ADD_PRODUCTS_ACTION } from '../../actions';
import {
  Button,
  Input, Space, Textarea, Typography,
} from '../../components';

const AddProducts = ({ show, setShow }) => {
  const theme = useTheme();
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e, name) => {
    setForm({
      ...form,
      [name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    dispatch(ADD_PRODUCTS_ACTION(form));
    setForm({
      name: '', img: '', price: '', description: '',
    });
    setShow(false);
  };

  return (
    <form className={`AddProducts ${show ? 'active' : ''}`} onSubmit={handleSubmit}>
      <Typography variant="h4" css="margin: 10px; text-align: center;">
        Add Products
      </Typography>
      <Input size="big" placeholder="name" onChange={(event) => handleChange(event, 'name')} value={form.name} required />
      <Input size="big" placeholder="img" type="url" onChange={(event) => handleChange(event, 'img')} value={form.img} required />
      <Input size="big" placeholder="price" type="price" onChange={(event) => handleChange(event, 'price')} value={form.price} required />
      <Textarea size="big" placeholder="description" onChange={(event) => handleChange(event, 'description')} value={form.description} required />
      <Space />
      <div className="AddProducts__btn">
        <Button onClick={() => setShow(false)}>Cancel</Button>
        <Button varaint="contained" type="submit">Submit</Button>
      </div>
      <Space />

      <style jsx>
        {`
        .AddProducts {
          z-index: 20;
          width: 30rem;
          display: none;
          flex-direction: column;
          align-items: center;
          background: ${theme.colors.secondary};
          border: 1px solid ${theme.colors.primary};
          border-radius: 20px;
          position: fixed;
          margin-left: auto;
          margin-right: auto;
          left: 0;
          right: 0;
          transition: 0.6s;
          padding: 10px;
        }
        .AddProducts.active {
          display: flex;
        }
        @media (max-width: 560px){
          .AddProducts {
            width: 98vw;
          }
        }
      `}
      </style>
    </form>
  );
};

export default AddProducts;
