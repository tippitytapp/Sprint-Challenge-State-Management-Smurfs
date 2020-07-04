const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const SmurfsRouter = require('./routing/smurfsrouter.js')
const server = express();
server.use(express.json());
server.use(cors());

server.use('/smurfs', SmurfsRouter)


server.get('/', (req, res) => {
  res.status(200).json({
      api: "Online"
  })
})

