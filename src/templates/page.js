import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const PageTemplate = ({ title, content }) => {
  return (
    <section className="hero">
      <div className="video">
        <img ></img>
        <video></video>
      </div>
      <div className="introText">
      
        <h1>WELCOME</h1>
        <h2>TO TRIFECTA MED SPA </h2>
        <p>Botox injections NYC. Trifecta Med Spa is a leading provider of Botox treatment in Wall Street area of NYC.
We welcome anyone who recognizes the importance of maintaining and improving their appearance, self-image,
life style and self-esteem.</p>
        <div className="buttons">
          <a><button>SERVICES</button></a>
          <a><button>BOOK ONLINE</button></a>
        </div>
      </div>
    </section>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <Layout>
      <PageTemplate title={page.title} content={page.content} />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`
