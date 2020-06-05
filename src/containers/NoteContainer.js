import React from "react";
import { connect } from "react-redux";
import Note from "../components/Note";
import { updateNote, deleteNote } from "../actions/BoardActions";

const NoteContainer = ({id, title, body, updateNote, deleteNote}) => (
  <Note
    id={id}
    title={title}
    body={body}
    onDeleteNote={() => deleteNote(id)}
    onSaveNote={(newTitle, newBody) => updateNote(id, newTitle, newBody)}
  />
);

export default connect(null, { updateNote, deleteNote })(NoteContainer);
