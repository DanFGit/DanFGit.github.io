import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Footer from '../src/components/Footer'

import '../src/components/all.sass'

console.log('hello')

// storiesOf('Welcome', module).add('to Storybook', () => (
//   <Welcome showApp={linkTo('Button')} />
// ))

storiesOf('Footer', module).add('default', () => <Footer />)
