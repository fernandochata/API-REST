import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, description: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model('Task', taskSchema)