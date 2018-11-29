const mongoose = require("mongoose");

const ToolSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    }
});

mongoose.model('Tool', ToolSchema);