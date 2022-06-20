import Task from '../models/task.model.js'


export default {
      async getTasks(req, res) {
            try {
                  const tasks = await Task.find()
                  return res.json(tasks)
            } catch (error) {
                return res.status(500).json({message: `error ${error.message}`})  
            }
      },
      
      getTask(req, res)  {
            try {
                  const task = await Task.findById(req.params.id)
                  return res.json(task)
            } catch (error) {
                  return res.status(500).json({message: `error ${error.message}`})
            }
      },

      createTask(req, res) {
            try {
                  
            } catch (error) {
                  return res.status(500).json({message: `error ${error.message}`})
            }
      },

      updateTask(req, res) { return res.json({'message': 'update task'})},

      deleteTask(req, res) {
            try {
                  const task = Task.findByIdAndDelete(req.params.id)
                  return res.json(task)
            } catch (error) {
                  return res.status(500).json({message: `error ${error.message}`})
            }
            
      }
}