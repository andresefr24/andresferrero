import * as actionTypes from './actionTypes';
import * as utility from '../utility/utility';

const initialState = {
    theme:{
        colors:{
            primary:'#3E92CC',
            primary_light:'#8EDCE6',
            primary_dark:'#13293D',
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
