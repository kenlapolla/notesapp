import React from "react";
import { connect } from "react-redux";
import { addNewNote } from "../actions/BoardActions";
import Board from "../components/Board";
import NoteContainer from "./NoteContainer"

const BoardContainer = ({ notes, addNewNote }) => (
  <Board notes={notes} onAddNoteClicked={() => {
      addNewNote();
  }}>
      {notes.map((note, index) => (
          <NoteContainer key={index} id={note.id} title={note.title} body={note.body}/>
      ))}
  </Board>
);

const mapStateToProps = (state) => ({
  notes: state.boardReducer.notes,
});

export default connect(mapStateToProps, { addNewNote })(BoardContainer);
