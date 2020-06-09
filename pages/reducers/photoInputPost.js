const INITIAL_STATE = {
    photoInputValue: ''
};

const photoInputReducer = (state = INITIAL_STATE, action) => {
    console.log('cameraInputReducer', action);
    switch(action.type){
        case 'ADD_CAMERA_PHOTO':
            return Object.assign({}, state, { photoInputValue: action.null });
    default:
        return state;
    }
}

export default photoInputReducer;
