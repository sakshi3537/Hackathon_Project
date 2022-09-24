import express, { Router } from 'express'
const router=express.Router();
import {fetchObjectives, createObjective, updateObjective} from '../controllers/objectives.js';

router.get('/', fetchObjectives);
router.post('/', createObjective);
router.patch('/:id', updateObjective);

export default Router;