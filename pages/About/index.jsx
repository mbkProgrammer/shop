import { css } from '@emotion/css';
import Head from 'next/head';
import { Layout } from '../../containers';

const About = () => (
  <Layout>
    <Head>
      <title>MBK: About</title>
    </Head>
    <h1
      className={css`
        text-align: center;
      `}
    >
      About Us
    </h1>
    <div
      className={css`
        padding: 20px;
        margin: 0 20px;
        background: var(--primary);
        border-radius: 16px;
        margin-bottom: 13vw;
      `}
    >
      <p
        className="about__p"
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
      </p>
    </div>

    <style jsx>
      {`
      .about__p {
        padding: 0 20px;
        text-align: justify;
        color: var(--background);
        line-height: 22px;
      }
      @media (max-width: 480px) {
        .about__p {
          text-align: left;
        }
      }
      `}
    </style>
  </Layout>
);

export default About;
