const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = config.get('port') || 5000;
const bodyParser = require('body-parser')

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('', require('./routes/boards.routers'))

mongoose.connect(config.get('mongoUrl'), { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

