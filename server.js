const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/provaNode', { useNewUrlParser: true})

requireDir('./src/models');

const Tool = mongoose.model('Tool');

app.use('/api', require('./src/routes'));

app.listen(3000);