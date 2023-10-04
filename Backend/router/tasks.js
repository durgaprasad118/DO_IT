import express from "express";
const router = express.Router();
import { getTasks,createTask,updateTask,deleteTask } from "../controllers/taskController.js";
import authMiddleware from "../middleware/authMiddleware.js";
router.use(authMiddleware)
router.get('/getTasks', getTasks);
router.post('/createTask', createTask);
router.put('/updateTask/:taskId', updateTask);
router.delete('/deleteTask/:taskId', deleteTask);


export default router;
