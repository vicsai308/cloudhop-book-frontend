import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { title, description, tag, _id} = props.note;
    const editNoteFieldValues = props.editNoteFieldValues;
    
    
    return (
        <div className="col-md-3">
            <div className="card my-2">
                <div className="card-body">

                    <div className="d-flex">
                        <div className="p-1 flex-grow-1"><h5 className="card-title">{title}</h5></div>
                        <div className="p-1"><i className="fa-solid fa-pen-to-square pull-right" style={{ color: "#34ea95" }} onClick={() => editNoteFieldValues(_id, title, description, tag)}></i></div>
                        <div className="p-1"><i className="fa-solid fa-trash" style={{ color: "#da4d10" }} onClick={() => deleteNote(_id)}></i></div>
                    </div>

                    <p className="card-text p-1">{description}</p>
                    <span className="badge text-bg-primary">{tag}</span>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    )
}

export default NoteItem
