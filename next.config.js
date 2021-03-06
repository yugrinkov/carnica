const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

module.exports = withImages(
  withSass({
    cssModules: true,
    env: {
      CARNICA_PUBLIC_URL: process.env.CARNICA_PUBLIC_URL,
      CARNICA_IS_PRODUCTION: process.env.CARNICA_IS_PRODUCTION,
    },
  }),
)
