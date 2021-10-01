//todo list에 필요한 필드?
//1. 제목 "string"
//2. 내용 "string"
//3. 마감일 "date"
//4. 체크상태 "Boolean"


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const TodoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  deadline: {
    type: Date,
    default: Date.now,
    required: true
  },
  checked: {
    type: Boolean
  },

});

// Create Model & Export
const todo = mongoose.model('todo', TodoSchema);
//1.
const TodoSchema = new todo({
    title: 1,
    content: 'MongoDB',
    deadline: false,
    checked:0

  });