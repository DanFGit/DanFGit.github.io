import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Intros from '../components/Intros'

export const IndexPageTemplate = ({ intros }) => (
  <Layout>
    <main>
      <Intros intros={intros} />
    </main>
  </Layout>
)

IndexPageTemplate.propTypes = {
  intros: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return <IndexPageTemplate intros={frontmatter.intros} />
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        intros {
          message
        }
      }
    }
  }
`
