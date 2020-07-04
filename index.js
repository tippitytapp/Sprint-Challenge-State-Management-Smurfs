const server = require('./server.js');
require('dotenv').config();
const environment = process.env.NODE_ENV;
const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`\n === Server listening in ${environment} mode on localhost:${PORT} === \n`)
})