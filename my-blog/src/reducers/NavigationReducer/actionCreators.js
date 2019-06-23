import * as actionTypes from './actionTypes';

export const navigate_to = (val) =>{
    return{
        type:actionTypes.NAVIGATE_TO,
        val:val
    }
};