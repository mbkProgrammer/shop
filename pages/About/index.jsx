import { css } from '@emotion/css';
import Head from 'next/head';
import { useTheme } from '@emotion/react';
import { Layout } from '../../containers';
import { Typography } from '../../components';

const About = () => {
  const theme = useTheme();
  return (
    <Layout>
      <Head>
        <title>MBK: About</title>
      </Head>
      <Typography variant="h1" css="text-align: center;">
        About Us
      </Typography>
      <div
        className={css`
          padding: 20px;
          margin: 0 20px;
          background: ${theme.colors.primary};
          border-radius: 16px;
          margin-bottom: 13vw;
        `}
      >
        <Typography
          variant="body2"
          css="padding: 0 20px;
          color: #fafafa;
          line-height: 22px;"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id adipisci
          qui necessitatibus quia aliquid eum inventore voluptas assumenda hic
          magnam saepe doloremque reiciendis, eveniet illo molestias nobis sit
          earum iusto maiores fugit consequatur dolorum. Quam nostrum laudantium
          alias amet asperiores recusandae molestias libero eos consectetur quas
          neque sapiente totam est, maiores expedita sequi molestiae quaerat, rem
          dolor ipsum ullam! Necessitatibus repudiandae natus molestiae error
          aperiam quo fugit, vitae numquam ipsa illo eum asperiores. Amet, nulla.
          Sit asperiores totam cumque sint odio officiis perferendis similique ut
          quasi consequatur quisquam veniam iure quia hic odit, incidunt aperiam
          suscipit placeat commodi excepturi optio.
        </Typography>
      </div>
    </Layout>
  );
};

export default About;
