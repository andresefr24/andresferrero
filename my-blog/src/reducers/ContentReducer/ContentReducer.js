import * as actionTypes from './actionTypes';
import * as utility from '../utility/utility';

const initialState = {
    content:undefined
};

const ContentReducer = (state = initialState, action) => {
    //console.log(action);
    switch (action.type) {

        case actionTypes.LOAD_CONTENT:return utility.updateObject(state,{
            content:action.val
        });

        default: return state;
    }
};

export default ContentReducer;
