const express = require('express')
const http = require('http')
const config = require('./config')


const app = express()
app.use(require('./middleware/send-http-error'))
require('./routes')({ app })
app.use(require('./error/not-found'))
app.use(require('./error/error-hendler'))


const port = config.get('port-dev')

http.createServer(app).listen(port, () => {
  console.log('Express server listening on port ' + port)
})
