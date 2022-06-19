import mongoose from 'mongoose'
import 'dotenv/config'

export default async () =>  {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/tasks')
        console.log(`MongoDB is connected`);
    } catch (error) {
        console.error(error);
    }

}

