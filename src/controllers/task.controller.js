
export default {
      getTask(req, res)  { return res.json({'message': 'get task'})},
      getTasks(req, res) { return res.json({'message': 'get tasks'})},
      createTask(req, res) { return res.json({'message': 'create task'})},
      updateTask(req, res) { return res.json({'message': 'update task'})},
      deleteTask(req, res) { return res.json({'message': 'delete task'})}
}