import { FETCH_ALL } from "../constants/constants";


const objectiveReducer = (objectives=[],action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload;
        default:
            return objectives;
    }

}



export default objectiveReducer;