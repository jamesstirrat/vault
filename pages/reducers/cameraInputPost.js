const INITIAL_STATE = {
    cameraInputValue: ''
};

const cameraInputReducer = (state = INITIAL_STATE, action) => {
    console.log('cameraInputReducer', action);
    switch(action.type){
        case 'ADD_CAMERA_PHOTO':
            return Object.assign({}, state, { cameraInputValue: action.null });
    default:
        return state;
    }
}

export default cameraInputReducer;
