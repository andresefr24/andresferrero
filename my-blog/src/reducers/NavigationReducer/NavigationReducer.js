import * as actionTypes from './actionTypes';
import * as utility from '../utility/utility';

const initialState = {
    current_route:"home",
    modal:{
        is_visible:false,
        content:undefined
    },
    drawer_is_open:false
};

const NavigationReducer = (state = initialState, action) => {
    //console.log(action);
    switch (action.type) {

        case actionTypes.NAVIGATE_TO:return utility.updateObject(state,{
            current_route:action.val
        });

        case actionTypes.TOGGLE_MODAL:return utility.updateObject(state,{
            modal:{
                ...state.modal,
                is_visible:action.val,
                content:action.content
            }
        });

        case actionTypes.TOGGLE_DRAWER:return utility.updateObject(state,{
            drawer_is_open: !state.drawer_is_open
        });

        default: return state;
    }
};

export default NavigationReducer;
