import 'dotenv/config'
import mongoose from 'mongoose'
const DATABASE_URL = process.env.DATABASE_URL
const connectToDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

export default connectToDatabase
