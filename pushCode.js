const ftp = require('basic-ftp')
const config = require('dotenv').config().parsed

connectAndPushFiles()

async function connectAndPushFiles() {
  const client = new ftp.Client()
  client.ftp.verbose = true
  try {
    await client.access({
      host: config.FTP_HOST,
      user: config.FTP_USER,
      password: config.FTP_PASSWORD,
      secure: false,
    })
    console.log(await client.list())
    //await client.ensureDir('htdocs')
    //await client.uploadFromDir('out')
  } catch (err) {
    console.log(err)
  }
  client.close()
}
