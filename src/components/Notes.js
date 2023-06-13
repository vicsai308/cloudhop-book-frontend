// import context api
import React, {useContext, useEffect, useRef, useState} from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';

const Notes = () => {
// usinging context api
const context = useContext(noteContext);
const {data, getNotes, editNote} = context;
const ModalRef = useRef(null)
const [editvalues, setEditvalues] = useState({
  etitle:"",
  edescription:"",
  etag:""
});


useEffect(() => {
  getNotes();
  // eslint-disable-next-line
},[]);

const editNoteFieldValues = (id, title, description, tag) => {
  console.log("editnote",id, title, description, tag);
  setEditvalues({
    id: id,
    etitle: title,
    edescription: description,
    etag: tag
  })
  ModalRef.current.click();
}

const onchange =(e)=>{
 setEditvalues({...editvalues, [e.target.name]:e.target.value});
}

const onSubmit =(e)=>{
 console.log(editvalues)
 editNote(editvalues,editvalues.id)
}

  return (
    <>
    {/* modal pop up for note edit */}

  {/* hidden button */}
<button type="button" className="btn btn-primary d-none" ref={ModalRef} data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
      <form>
          <div className="my-3">
            <label htmlFor="title" className="form-label">Note title</label>
            <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" value={editvalues.etitle} onChange={onchange} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Note description</label>
            <input type="text" className="form-control" id="edescription" name="edescription" value={editvalues.edescription} onChange={onchange} />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="etag" name="etag" value={editvalues.etag} onChange={onchange} />
          </div>
        </form>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={onSubmit}>Update note</button>
      </div>
    </div>
  </div>
</div>
    
    
    
    <div className="row my-3">
      {data.map((note, index)=>{
        // return note.title;
        return <NoteItem note={note} key={index} editNoteFieldValues={editNoteFieldValues}/>
      })}
    </div>
    </>
  )
}

export default Notes
