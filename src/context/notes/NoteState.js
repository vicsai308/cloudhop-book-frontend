//We create state to make it accessible for evveryone

import { useState } from "react";

//import notecontext 
import NoteContext from "./noteContext";

//We pass the state and functions defined in the context api
const NoteState = (props) => {
  const hostname = "http://localhost:5000";

  const [data, setData] = useState([]);

  const getNotes = async () => {
    //API Call
    const response = await fetch(`${hostname}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0NzdiZDMyNGI1ODdiZWUyMjg5YmZhIn0sImlhdCI6MTY4MjQwODg5N30.3nHwOOkUNb7qkUilNRSeRlooWjC5zsej_gIGMNI-2B0"
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);
    setData(json);
  }

  //ADD a note
  const addNote = async (title, description, tag) => {
    //API Call
    const response = await fetch(`${hostname}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0NzdiZDMyNGI1ODdiZWUyMjg5YmZhIn0sImlhdCI6MTY4MjQwODg5N30.3nHwOOkUNb7qkUilNRSeRlooWjC5zsej_gIGMNI-2B0"
      },
      body: JSON.stringify({
        "title": title,
        "description": description,
        "tag": tag,
      })
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);
    getNotes();

    // let tempdata = {
    //   "_id": "1122222222222333",
    //   "user": "313313131131",
    //   "title": title,
    //   "description": description,
    //   "tag": tag,
    //   "password": "2023-04-27T08:00:54.968Z",
    //   "__v": 0
    // };
    // setData(state => [tempdata, ...state]);
  }

  //Delete a note
  const deleteNote = async (id) => {
    //API Call
    const response = await fetch(`${hostname}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0NzdiZDMyNGI1ODdiZWUyMjg5YmZhIn0sImlhdCI6MTY4MjQwODg5N30.3nHwOOkUNb7qkUilNRSeRlooWjC5zsej_gIGMNI-2B0"
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);
    getNotes();
  }

  // Edit a note
  const editNote = async (data, id) => {
    //API Call
    const response = await fetch(`${hostname}/api/notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0NzdiZDMyNGI1ODdiZWUyMjg5YmZhIn0sImlhdCI6MTY4MjQwODg5N30.3nHwOOkUNb7qkUilNRSeRlooWjC5zsej_gIGMNI-2B0"
      },
      body: JSON.stringify({
        "title": data.etitle,
        "description": data.edescription,
        "tag": data.etag,
      }), // body data type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);
    getNotes();

    // Logic to edit in client
  }

  return (
    <NoteContext.Provider value={{ data, setData, addNote, deleteNote, getNotes, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;