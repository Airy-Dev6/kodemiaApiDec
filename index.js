const db = require('./src/lib/db')
const server = require ('./src/server')

/* server.listen('8080', () => {
    console.log('Server is listening')
}) */

db.connect
  .then(() => {
    server.listen('8080', () => {
      console.log('server is listening')
    })
  })
  .catch(error => {
    console.error('error: ', error)
  })