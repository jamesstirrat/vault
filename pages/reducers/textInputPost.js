const INITIAL_STATE = {
    text: '' 
};

const textInputReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'UPLOAD_SUCCESS':
            return {state, text: action.payload };
        default:
            return state;
    }
}

export default textInputReducer;
