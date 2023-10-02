import Task from '../model/Task.js'
export const getTasks = async (req, res) => {
  try {
    const userId = req.user.userId
    // Find tasks associated with the logged-in user
    const tasks = await Task.find({ user: userId })
    const user = req.user
    res.status(200).json({
      tasks,user
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body
    const userId = req.user.userId
    // Create a new task associated with the logged-in user
    const newTask = new Task({ title, description, user: userId })
    await newTask.save()

    res.status(201).json({ message: 'Task created successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.taskId
    const { title, description, completed } = req.body

    // Update the task
    await Task.findByIdAndUpdate(taskId, { title, description, completed })

    res.status(200).json({ message: 'Task updated successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.taskId

    // Delete the task
    await Task.findByIdAndDelete(taskId)

    res.status(200).json({ message: 'Task deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

export const completedTasks = async (req, res) => {
  try {
    //  const tasks =
  } catch (er) {
    console.log(er)
    res.status(500).json({ message: 'Server Error' })
  }
}
