import Head from 'next/head';
import {
  Layout, Input, Textarea, Button,
} from '../../components';

const Contact = () => (
  <Layout>
    <Head>
      <title>
        MBK: Contact
      </title>
    </Head>
    <div className="contact">
      <img src="assets/img/Contact.png" alt="contact us" className="contact__img" />
      <div className="contact__form">
        <h1>Contact Us</h1>
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
          height: 400px;
        }
        .contact__form {
          margin-right: 80px;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 480px) {
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
