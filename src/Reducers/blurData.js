import { BLUR_FILTER } from '../Actions/blur';

export default (state=null,action)=>{
    switch(action.type){
        case BLUR_FILTER:
            return action.payload;
        default:
            return state;
    }
}