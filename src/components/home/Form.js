import React from 'react'
import useInput from '../../customhook/useInput'
import { addNote }  from '../../store/actions/noteActions'
import { useDispatch } from 'react-redux'
const Form = () => {
    const [title,bindTitle,resetTitle] = useInput()
    const [Content,bindContent,resetContent] = useInput() //using hooks
    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addNote({title,Content})) //adding to the notes instead of console
        resetContent();
        resetTitle();
    }
    return (
    
        <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text">New Note</h5>

                <div className="input-field">
                    <input id="note-title" type="text" className="validate" {...bindTitle}/>
                    <label htmlFor="note-title">Note Title</label>
                </div>
                <div className="input-field">
                <textarea id="note-content" className="materialize-textarea" {...bindContent}></textarea>
                <label htmlFor="note-content">Note Content</label>
                </div>
                <button className="btn green">Add</button>
            </form>
        </div>
        
    )
}

export default Form
