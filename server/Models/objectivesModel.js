import mongoose from 'mongoose'

const objectiveSchema = mongoose.Schema({
    topic: String,
    createdAt:{
        type: Date,
        default: Date.now
    },
    updates: {
        type: [{updateContent: String, timeSpent: Number}],
        default: []
    }
});

const objectiveModel= mongoose.model('objectiveModel', objectiveSchema);

export default objectiveModel;