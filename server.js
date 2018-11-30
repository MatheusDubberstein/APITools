const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/provaNode', { useNewUrlParser: true})

requireDir('./src/models');

const Tool = mongoose.model('Tool');
const User = mongoose.model('User');

app.use('/api', require('./src/routes'));

app.listen(3000);