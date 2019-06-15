import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({ image, heading, subheading, blurbs }) => (
  <Layout>
    <p>Hello</p>
  </Layout>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  blurbs: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      image={frontmatter.image}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      blurbs={frontmatter.blurbs}
    />
  )
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        blurbs {
          heading
          body
        }
      }
    }
  }
`
