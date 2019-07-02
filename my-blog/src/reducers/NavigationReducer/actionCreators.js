import * as actionTypes from './actionTypes';

export const navigate_to = (val) =>{
    return{
        type:actionTypes.NAVIGATE_TO,
        val:val
    }
};

export const toggle_modal = (val,content) =>{
    return{
        type:actionTypes.TOGGLE_MODAL,
        val:val,
        content:content
    }
};

export const toggle_drawer = () =>{
    return{
        type:actionTypes.TOGGLE_DRAWER
    }
};