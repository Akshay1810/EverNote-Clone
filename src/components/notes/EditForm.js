import React from 'react'
import { updateNote } from '../../store/actions/noteActions'
import useInput from '../../customhook/useInput'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
const EditForm = () => {
    const note = useSelector((state)=> state.note)
    console.log('edit form', note)
    const [title,bindTitle,resetTitle] = useInput(note.title)
    const [Content,bindContent,resetContent] = useInput(note.Content) //using hooks
    const dispatch = useDispatch();
    const history =  useHistory()
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(updateNote({id: note.id,title,Content})) //adding to the notes instead of console
        resetContent();
        resetTitle();
        history.push('/')
    }
    return (
    
        <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text">New Note</h5>

                <div className="input-field">
                    <input id="note-title" type="text" className="validate" {...bindTitle}/>
                    <label className="active" htmlFor="note-title">Note Title</label>
                </div>
                <div className="input-field">
                <textarea id="note-content" className="materialize-textarea" {...bindContent}></textarea>
                <label className="active" htmlFor="note-content">Note Content</label>
                </div>
                <button className="btn green">Update</button>
            </form>
        </div>
        
    )
}

export default EditForm
