const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

module.exports = withImages(
  withSass({
    cssModules: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' },
      }
    },
    env: {
      CARNICA_PUBLIC_URL: process.env.CARNICA_PUBLIC_URL,
    },
  }),
)
