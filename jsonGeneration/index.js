const ContentTypes = require('./ContentTypes')
const JsonGenerator = require('./JsonGenerator.js')

async function main() {
  const generator = new JsonGenerator(process.env.CARNICA_API_URL)
  const contentType = new ContentTypes()
  contentType.populate()

  const contentTypes = contentType.get()

  if (contentTypes.length === 0) {
    throw new Error('Content types array is empty')
  }

  contentTypes.forEach(contentType => {
    generator.getContentTypeDataAndWriteFile(contentType)
  })
}

main()
