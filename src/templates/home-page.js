import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export const HomePageTemplate = ({
  image,
  heading,
  subheading,
  blurbs,
}) => (
  <div>
    <p>Hello</p>
  </div>
)

HomePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  blurbs: PropTypes.array,
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <HomePageTemplate
      image={frontmatter.image}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      blurbs={frontmatter.blurbs}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
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
