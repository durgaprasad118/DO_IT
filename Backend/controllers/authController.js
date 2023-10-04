import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../model/User.js'
const SECRET = 'my-secret-key'
export const register = async (req, res) => {
  try {
    const { username, password, user } = req.body

    // Check if the username already exists
    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)
    // Create a new user
    const newUser = new User({ username, password: hashedPassword, user })
    await newUser.save()
    const token = jwt.sign({ username: username, user: user }, SECRET, {
      expiresIn: '1h',
    })
    res.status(201).json({ message: 'User registered successfully', token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// export const login = async (req, res) => {
//   try {
//     const { username, password } = req.body

//     console.log(username, password)
//     const existinguser = await User.findOne({ username })
//     if (!existinguser) {
//       return res.status(401).json({ message: 'Authentication failed' })
//     }
//     // Compare the provided password with the hashed password
//     const passwordMatch = await bcrypt.compare(password, existinguser.password)
//     if (!passwordMatch) {
//       return res.status(401).json({ message: 'Authentication failed' })
//     }

//     // Create a JWT token for authentication
//     const token = jwt.sign(
//       { userId: existinguser._id, username: existinguser.username },
//       'secretKey', // Replace with a strong, random secret key
//       { expiresIn: '1h' }, // Token expiration time
//     )

//     res.status(200).json({ token, userId: existinguser._id })
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ message: 'Server errorr' })
//   }
// }

export const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const existingUser = await User.findOne({ username })
    // console.log(existingUser);
    if (!existingUser) {
      return res
        .status(401)
        .json({ message: 'User not found! please register!!' })
    }
    const passwordMatch = await bcrypt.compare(password, existingUser.password)
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Authentication failed' })
    }

    // Create a JWT token for authentication
    const token = jwt.sign(
      { userId: existingUser._id, username: existingUser.username,user:existingUser.user },
      'xyz',
      {
        expiresIn: '1h',
      },
    )

    res.status(200).json({ token, userId: existingUser._id })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
