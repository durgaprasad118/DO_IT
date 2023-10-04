import express from 'express'
const router = express.Router()
import { register, login } from '../controllers/authController.js'
import authenticateJwt from '../middleware/authMiddleware.js'

router.post('/register', register)
router.post('/login', login)
router.get('/me', authenticateJwt, (req, res) => {
  res.json(req.user.user.username)
})
export default router
