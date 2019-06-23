import * as actionTypes from './actionTypes';
import * as utility from '../utility/utility';

const initialState = {
    theme:{
        colors:{
            primary:'',
            primary_light:'',
            primary_dark:''
        },
        measures:{
            header_height:{
                xs:'5vw',
                sm:'5vw',
                md:'5vw',
                lg:'3vw',
                xl:'3vw'
            }
        }
    }
};

const ThemeReducer = (state = initialState, action) => {
    //console.log(action);
    switch (action.type) {

        default: return state;
    }
};

export default ThemeReducer;
