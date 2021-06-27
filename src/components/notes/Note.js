import React from 'react'
import { deleteNote, toggleFav } from '../../store/actions/noteActions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Note = ({ note }) => {
    const dispatch = useDispatch() 
    const deleteNotehandler  = () =>{ 
        dispatch(deleteNote(note))
    }            //to delete the note
    const favNotehandler  = () =>{
        dispatch(toggleFav(note))
    }            //to add fav the note
    const heartMarkup = note.favorite? 'favorite' : 'favorite_border' //for markup of fav true to fill the the heart
    const editNoteHandler = () => {
        dispatch({type:'EDIT_NOTE',payload: note})
    }
    return (
        <div className="note white">
           <div className="right-align">
               <i className="material-icons red-text" style={{cursor:'pointer'}} onClick={favNotehandler}>{heartMarkup}</i> 
               <i className="material-icons " style={{cursor:'pointer'}} onClick={deleteNotehandler}>delete</i>
           </div>
           <Link to={"/note/" + note.id}>
           <h5 className="black-text">{note.title}</h5>
           </Link>
           <p className="truncate">{note.Content}</p>
           <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
           <div className="right-align">
               <Link to={`/editform/${note.id}`}>
               <i className="material-icons black-text" style={{cursor:'pointer'}} onClick={editNoteHandler}>edit</i>
               </Link>
            </div>
        </div>
    )
}

export default Note
