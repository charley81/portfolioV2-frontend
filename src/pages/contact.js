import React from 'react'
import Layout from '../components/layout'
import { css } from '@emotion/react'

const contactPage = () => {
  return (
    <Layout>
      <section
        css={css`
          display: grid;
          place-items: center;
          margin-top: 5rem;
          background: linear-gradient(
            to bottom right,
            var(--primaryColor),
            var(--secondaryColor)
          );
          border-radius: var(--borderRadius);
          padding: 1rem;

          h3 {
            text-align: center;
            margin-bottom: 1.25rem;
            color: var(--lightColor);
          }

          form {
            width: 80vw;
            max-width: 35rem;
          }

          input,
          textarea {
            display: block;
            width: 100%;
            padding: 0.75rem 1rem;
            margin-bottom: 1rem;
            border-radius: var(--borderRadius);
            border: transparent;
          }
        `}
      >
        <article>
          <h3>Contact Me</h3>
          <form action="https://formspree.io/f/mayawpoy" method="POST">
            <div className="input-fields">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button className="btn center-btn" type="submit">
              Submit
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contactPage
