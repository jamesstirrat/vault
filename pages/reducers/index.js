import { combineReducers } from 'redux';

//Posting
import photoInputReducer from './photoInputPost'
import cameraInputReducer from './cameraInputPost'
import textInputReducer from './textInputPost'

export default rootReducer = combineReducers({
    text: textInputReducer,
    photo: photoInputReducer,
    camera: cameraInputReducer
})
