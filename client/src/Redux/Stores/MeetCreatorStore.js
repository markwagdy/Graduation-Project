import {createStore} from "redux";
import meetCreatorReducer from "../Reducers/MeetCreatorReducer";

function configurationStore(state={meetingCreated:true}){
    return createStore(meetCreatorReducer,state);
}
export default configurationStore;