const axios = require('axios')
const fs = require('fs')

module.exports = class JsonGenerator {
  constructor(publicUrl) {
    this.publicUrl = publicUrl
  }

  async getEntries(entryName) {
    return new Promise((resolve, reject) => {
      axios
        .get(this.publicUrl + '/' + entryName)
        .then(response => {
          const responseData = response.data
          resolve(responseData)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  }

  async getContentTypeDataAndWriteFile(contentTypeName) {
    const responseData = await this.getEntries(contentTypeName)
    if (responseData) {
      this.writeFile(responseData, contentTypeName)
    } else {
      throw new Error(`${contentTypeName}: Response data is empty`)
    }
  }

  writeFile(responseData, contentTypeName) {
    fs.writeFile(
      `public/api/${contentTypeName}.json`,
      JSON.stringify(responseData),
      'utf8',
      err => this.onWriteCallback(err, contentTypeName),
    )
  }

  onWriteCallback(err, contentTypeName) {
    if (err) {
      this.logError(contentTypeName)
      return console.log(err)
    }

    this.logSuccess(contentTypeName)
  }

  logError(contentTypeName) {
    console.log(
      contentTypeName + ': An error occured while writing JSON Object to File.',
    )
  }

  logSuccess(contentTypeName) {
    console.log(contentTypeName + ': JSON file has been saved.')
  }
}
