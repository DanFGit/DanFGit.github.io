import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/home-page'

const HomePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <HomePageTemplate
        image={data.image}
        heading={data.heading}
        subheading={data.subheading}
        blurbs={data.blurbs || []}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
