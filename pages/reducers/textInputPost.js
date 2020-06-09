const INITIAL_STATE = {
    text: { textInputValue: '' }
};

const textInputReducer = (state = INITIAL_STATE, action) => {
    console.log('textInputReducer', action);
    switch(action.type){
        case 'ADD_INPUT_TEXT':
            return {...state, textInputValue: action.payload };
        case 'RESET_INPUT_TEXT':
            return {...state, textInputValue: ''}
    default:
        return state;
    }
}

export default textInputReducer;
