import * as api from '../api/api.js'
import { FETCH_ALL, LOADING_FALSE, LOADING_TRUE} from "../constants/constants";

const fetchObjectives = () => async (dispatch) => {
    try {
        dispatch({type:LOADING_TRUE});
        const {data} = await api.fetchObjectives();
        const objectives=data;
        dispatch({type : FETCH_ALL, payload : objectives});
        dispatch({type:LOADING_FALSE});
    } catch (error) {
        console.log(error);
    }
}

const createObjective = (objective) => async (dispatch) => {
    try {
        dispatch({type:LOADING_TRUE});
        await api.createObjective(objective);
        dispatch({type:LOADING_FALSE});
        dispatch(fetchObjectives());
    } catch (error) {
        console.log(error);
    }
}

const updateObjective = (objective)  => async(dispatch) => {
    try {
        dispatch({type:LOADING_TRUE});
        await api.updateObjective(objective);
        dispatch({type:LOADING_FALSE});
        dispatch(fetchObjectives());
    } catch (error) {
        console.log(error);
    }
}

export {fetchObjectives,createObjective,updateObjective};

