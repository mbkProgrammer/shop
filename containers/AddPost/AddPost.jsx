import { gql, useMutation } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import {
  Button,
  Input, Space, Textarea, Typography,
} from '../../components';

const ADD_POST = gql`
  mutation CREATE_POST($date: String!, $title: String!, $body: String!) {
    createPost(input: { date: $date, title: $title, body: $body }) {
      title
      body
      date
    }
  }
`;

const AddPost = ({ show, setShow }) => {
  const theme = useTheme();
  const [form, setForm] = useState({});
  const [addPost] = useMutation(ADD_POST);

  const handleChange = (e, name) => {
    setForm({
      ...form,
      [name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    addPost({
      variables: {
        date: `${new Date().getTime()}`,
        title: form.title,
        body: form.body,
        id: new Date().getTime(),
      },
    });
    setForm({ title: '', body: '' });
    setShow(false);
  };

  return (
    <form className={`addPost ${show ? 'active' : ''}`}>
      <Typography variant="h4" css="margin: 10px; text-align: center;">
        Add Post
      </Typography>
      <Input size="big" placeholder="tittle" onChange={(event) => handleChange(event, 'title')} value={form.title} />
      <Textarea size="big" placeholder="body" onChange={(event) => handleChange(event, 'body')} value={form.body} />
      <Space />
      <div className="addPost__btn">
        <Button onClick={() => setShow(false)}>Cancel</Button>
        <Button varaint="contained" onClick={handleSubmit} type="submit">Submit</Button>
      </div>
      <Space />

      <style jsx>
        {`
        .addPost {
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
        .addPost.active {
          display: flex;
        }
        @media (max-width: 560px){
          .addPost {
            width: 98vw;
          }
        }
      `}
      </style>
    </form>
  );
};

export default AddPost;
