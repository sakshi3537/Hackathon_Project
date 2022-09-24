import mongoose from 'mongoose';
import objectiveModel from '../Models/objectivesModel.js';



const fetchObjectives = async (req, res) => {
    try {
        const objectives = await objectiveModel.find();
        res.status(200).json(objectives);
    } catch (error) {
        res.status(404).json(error);
    }
    
}

const createObjective = async (req, res) => {
    const objective = req.body;
    const newObjective= new objectiveModel({topic: objective.topic});
    try {
        await newObjective.save();
        res.status(201).json(newObjective);
    } catch (error) {
        
        res.status(409).json(error);
    }
}

const updateObjective = async (req, res) => {
    const {id}= req.params;
    const objective = req.body;
    try {
        const updatedObjective = await objectiveModel.findByIdAndUpdate(id, objective, {new:true});
        res.status(200).json(updatedObjective);
    } catch (error) {
        res.status(404).json(error);
    }

}

export {fetchObjectives, createObjective, updateObjective};