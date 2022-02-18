import Head from 'next/head';
import {
  Input, Textarea, Button, Typography,
} from '../../components';
import { Layout } from '../../containers';

const Contact = () => (
  <Layout>
    <Head>
      <title>
        MBK: Contact
      </title>
    </Head>
    <div className="contact">
      <img src="assets/img/Contact.jpg" alt="contact us" className="contact__img" />
      <div className="contact__form">
        <Typography variant="h1">Contact US</Typography>
        <Input placeholder="Full Name" size="small" type="text" />
        <Input placeholder="E-mail" size="small" type="email" />
        <Textarea size="small" placeholder="Massage" />
        <Button size="small" varaint="contained">Contact Us</Button>
      </div>
    </div>

    <style jsx>
      {`
          .contact {
            display: flex;
            justify-content: space-around;
          }
          .contact__img {
            width: 50vw;
            height: 100%;
          }
          .contact__form {
            margin-right: 80px;
            display: flex;
            flex-direction: column;
          }
          @media (max-width: 700px) {
            .contact {
              flex-direction: column-reverse;
              justify-content: center;
              align-items: center;
            }
            .contact__img {
              height: 100%;
              width: 85vw;
            }
            .contact__form {
              margin-right: 0;
              margin-bottom: 60px;
              align-items: center;
            }
          }
        `}
    </style>
  </Layout>
);

export default Contact;
