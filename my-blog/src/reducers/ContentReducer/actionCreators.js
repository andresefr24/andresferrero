import * as actionTypes from './actionTypes';
import firebaseFetch from "../../helpers/firebaseFetch";

export const fetch_content = () =>{
    return dispatch =>{
        firebaseFetch((data)=>dispatch(load_content(data)))
    }
};

export const load_content = (val) =>{
    return{
        type:actionTypes.LOAD_CONTENT,
        val:val
    }
};