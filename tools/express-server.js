const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

/**
 * Serve Directory
 */
app.use('/',express.static('./'))

// TODO: filter out .express-server.js

/**
 * Server Exit Code
 * Comment out if not needed
 */
app.get('/exit', (req, res) => {
    res.send('exiting');
    process.kill(process.pid, 'SIGTERM');
});

app.listen(port, function fnHandleListenPort(){
    console.log(`Example app listening on port ${port}`)
})