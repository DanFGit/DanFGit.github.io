import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as Styled from './styles/Header'

const SITE_SETTINGS_QUERY = graphql`
  query SITE_SETTINGS_QUERY {
    configYaml(settingsKey: { eq: "general" }) {
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
  const { configYaml: config } = useStaticQuery(SITE_SETTINGS_QUERY)

  const [firstTitle, secondTitle] = config.title.split(' ')

  return (
    <Styled.Jumbotron background={config.header}>
      <Styled.Logo>
        <Styled.Title>
          <span>{firstTitle}</span> {secondTitle}
        </Styled.Title>
        <div>{config.subtitle}</div>
      </Styled.Logo>

      <Styled.Contact>
        <div className="phone">
          <i className="fa fa-phone" aria-hidden="true" />{' '}
          {config.contact.phone}
        </div>
        <div className="email">
          <i className="fa fa-envelope" aria-hidden="true" />{' '}
          <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
        </div>
        <div className="location">
          <i className="fa fa-map-marker" aria-hidden="true" />{' '}
          {config.contact.location}
        </div>
      </Styled.Contact>
    </Styled.Jumbotron>
  )
}

export default Header
