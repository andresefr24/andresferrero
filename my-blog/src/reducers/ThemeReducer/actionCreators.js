import * as actionTypes from './actionTypes';
import FirebaseFetch from "../../helpers/FirebaseFetch";

export const fetch_content = () =>{
    return dispatch =>{
        FirebaseFetch((data)=>dispatch(load_content(data)))
    }
};

export const load_content = (val) =>{
    return{
        type:actionTypes.LOAD_CONTENT,
        val:val
    }
};