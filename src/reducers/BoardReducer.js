import { combineReducers } from "redux";
import { BoardActionTypes } from "../actions/BoardActions";

function notesReducer(currentNotes = [], action){
    switch(action.type){
        case BoardActionTypes.ADD_NEW_NOTE:
            let newNote ={
                id: Date.now(),
                title: "New Note Title", 
                body: "Sample Body Text"
            }
            return [...currentNotes, newNote];

        case BoardActionTypes.DELETE_NOTE:
            return currentNotes.filter(note => note.id !== action.id);

        case BoardActionTypes.UPDATE_NOTE:
            return currentNotes.map(note => {
                if(note.id === action.id){
                    return {
                        ...note,
                        title: action.title,
                        body: action.body,
                    }
                }else {
                    return note;
                }
            })

        default: 
         return currentNotes
    }
}

export default combineReducers({
    notes: notesReducer,
});