import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const SITE_SETTINGS_QUERY = graphql`
  query SITE_SETTINGS_QUERY {
    configYaml (settingsKey: { eq: "general" }) {
      title
      subtitle
      contact {
        phone
        email
        location
      }
      header
    }
  }
`

const Header = () => {
  const data = useStaticQuery(SITE_SETTINGS_QUERY)

  return (
    <header>
      { data.configYaml.title } - { data.configYaml.subtitle }
    </header>
  )
}

export default Header
