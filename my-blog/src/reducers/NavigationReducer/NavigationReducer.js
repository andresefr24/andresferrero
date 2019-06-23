import * as actionTypes from './actionTypes';
import * as utility from '../utility/utility';

const initialState = {
    current_route:"home"
};

const NavigationReducer = (state = initialState, action) => {
    //console.log(action);
    switch (action.type) {

        case actionTypes.NAVIGATE_TO:return utility.updateObject(state,{
            current_route:action.val
        });

        default: return state;
    }
};

export default NavigationReducer;
