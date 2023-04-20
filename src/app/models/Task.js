const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  id: String,
  title: String,
  items: {
    id: String,
    title: String,
    link: String,
    device: String,
    deadline: String,
    label: String,
  },
  date: Date
});


const taskDB = mongoose.createConnection('mongodb+srv://task-management:mBpbpR0oFvshoghP@task-management.yrlbnwg.mongodb.net/?retryWrites=true&w=majority',
  {
    bufferCommands: false, // Disable mongoose buffering
    bufferMaxEntries: 0, // and MongoDB driver buffering
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 45000,
  }
).useDb('task-management')
const Task = taskDB.model('Task', TaskSchema, 'task')

module.exports = Task
