import axios from 'axios'

const URL = "http://localhost:5000/objectives"

const fetchObjectives = () => axios.get(URL);
const createObjective = (objective) => axios.post(URL, objective);
const updateObjective = (objective) => axios.patch(`${URL}/${objective._id}`,objective);

export {fetchObjectives,createObjective,updateObjective};


