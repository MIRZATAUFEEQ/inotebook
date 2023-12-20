const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/inotebook")

// Define the post schema
const notesSchema = new Schema({
  user:{
    type:Schema.Types.ObjectId,
    ref:'User',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default:'general'
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create the post model
const Post = mongoose.model('Notes', notesSchema);

module.exports = Post;
