const ftp = require('basic-ftp')

connectAndPushFiles()

async function connectAndPushFiles() {
  const client = new ftp.Client()
  client.ftp.verbose = true
  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
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
