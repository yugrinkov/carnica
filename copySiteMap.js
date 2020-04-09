const fs = require('fs')

// destination.txt will be created or overwritten by default.
fs.copyFile('robots.txt', 'out/robots.txt', err => {
  if (err) throw err
  console.log('robots.txt was copied to out/robots.txt')
})

fs.copyFile('sitemap.xml', 'out/sitemap.xml', err => {
  if (err) throw err
  console.log('sitemap.xml was copied to out/sitemap.xml')
})
