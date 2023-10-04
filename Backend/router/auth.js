import express from 'express'
const router = express.Router()
import { register, login } from '../controllers/authController.js'
import authenticateJwt from '../middleware/authMiddleware.js'
import User from '../model/User.js'
router.post('/register', register)
router.post('/login', login)
router.get('/me', authenticateJwt, (req, res) => {
  res.json(req.user.user)
})
export default router
