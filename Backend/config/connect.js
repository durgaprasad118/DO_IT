import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
const DATABASE_URL = "mongodb+srv://durgaprasadachana1108:dp123456@cluster0.mzrj8ni.mongodb.net/"

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
