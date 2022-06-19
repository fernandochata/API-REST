import Task from '../models/task.model.js'


export default {
      async getTasks(req, res) {
            const tasks = await Task.find()
            return res.json(tasks)
      },
      
      getTask(req, res)  { return res.json({'message': 'get task'})},

      createTask(req, res) { return res.json({'message': 'create task'})},

      updateTask(req, res) { return res.json({'message': 'update task'})},

      deleteTask(req, res) { return res.json({'message': 'delete task'})}
}