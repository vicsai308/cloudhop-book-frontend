import React, {useContext, useState} from 'react'
import Notes from './Notes'
import noteContext from '../context/notes/noteContext'



const Home = () => {
const [fieldvalues, setFielvaluse] = useState({title:"", description:"", tag:""})
const context = useContext(noteContext);
const {addNote, data} = context;

const onAddNote = (e) => {
  e.preventDefault();
  addNote(fieldvalues.title, fieldvalues.description,fieldvalues.tag);
  setFielvaluse({title:"", description:"", tag:""});  //reset form fields
}

onchange = (e) =>{
  const name = e.target.name;
  const value = e.target.value;
  //...spread data or retain data values, but add new or overide existing values
  setFielvaluse({...data, ...fieldvalues, [name]: value});
}
 
  return (
    <>
      <div className='container'>
      <h2>Add Notes</h2>
        <form>
          <div className="my-3">
            <label htmlFor="title" className="form-label">Note title</label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onchange} value={fieldvalues.title}/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Note description</label>
            <input type="text" className="form-control" id="description" name="description" onChange={onchange} value={fieldvalues.description} />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" onChange={onchange} value={fieldvalues.tag} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={onAddNote}>Add note</button>
        </form>
      </div>
      
      <div className='my-3 container'>
       <h2>All Notes</h2>
       <Notes/>
      </div>
    </>
  )
}

export default Home
