import mongoose from 'mongoose'

const objectiveSchema = mongoose.Schema({
    topic: String,
    createdAt:{
        type: Date,
        default: Date.now
    },
    updates: {
        type: [String],
        default: []
    }
});

const objectiveModel= mongoose.model('objectiveModel', objectiveSchema);

export default objectiveModel;