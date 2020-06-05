export const BoardActionTypes = {
    ADD_NEW_NOTE: 'ADD_NEW_NOTE',
    DELETE_NOTE: 'DELETE_NOTE',
    UPDATE_NOTE: 'UPDATE_NOTE',
}

const addNewNoteUnsafe = () => {
    return {
        type : BoardActionTypes.ADD_NEW_NOTE,
    }
}

export const addNewNote = () => (dispatch, getState) => {
    dispatch(addNewNoteUnsafe());
}

const deleteNoteUnSafe = (id) => {
    return {
        type : BoardActionTypes.DELETE_NOTE,
        id
    }
}

export const deleteNote = (id) => (dispatch, getState) => {
    dispatch(deleteNoteUnSafe(id));
}

const updateNoteUnsafe = (id, title, body) => {
    return {
        type : BoardActionTypes.UPDATE_NOTE,
        id, title, body
    }
}

export const updateNote = (id, title, body) => (dispatch, getState) => {
    dispatch(updateNoteUnsafe(id, title, body));
}
