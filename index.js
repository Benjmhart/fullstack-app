const express = require("express");
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./services/passport')
require('./models/User')
mongoose.connect(keys.mongoURI)

const app = express();

require('./routes/authRoutes')(app)

app.listen(process.env.PORT || 5000);
