import { configure } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// Gatsby config
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
global.__PATH_PREFIX__ = ''
window.___navigate = pathname => action('NavigateTo:')(pathname)

configure(loadStories, module)
