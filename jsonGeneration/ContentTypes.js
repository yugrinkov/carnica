const fs = require('fs')

module.exports = class ContentTypes {
  constructor() {
    this.contentTypes = []
    this.targetFolder = 'pages/api'
  }

  populate() {
    fs.readdirSync(this.targetFolder).forEach(file => {
      const fileName = this.getFileName(file)
      this.contentTypes.push(fileName)
    })
    return this
  }

  get() {
    return this.contentTypes
  }

  getFileName(file) {
    return file && file.split('.')[0]
  }
}
