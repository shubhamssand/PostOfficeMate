require('dotenv').config() // load .env file

module.exports = {
  port: process.env.PORT,
  app: process.env.APP,
  env: process.env.NODE_ENV,
  secret: "random",
  mongo: {
    uri: process.env.MONGOURI,
    testURI: process.env.MONGOTESTURI
  },
  awsaccess: {
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY_ID,
    region: process.env.REGION
  },
  bucket: process.env.BUCKET
}
