import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import moment from 'moment'
const NotesDetail = (props) => {
    const id = props.match.params.id
    useFirestoreConnect([{ collection: 'notes', doc: id }]);
    const note = useSelector(({ firestore: { data } }) => data.notes && data.notes[id]) //By this we will return info about the added note when we click on the title
    const noteMarkup = !isLoaded(note) ? (
        <div className="container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Loading...</span>

                </div>
                <div className="card-action grey lighten-4 grey-text">
                    
                </div>
            </div>
        </div>) : isEmpty(note) ? (
            <div className="container section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title"> Sorry! No such note created</span>

                    </div>
                    <div className="card-action grey lighten-4 grey-text">

                    </div>
                </div>
            </div>) : (
        <div className="container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{note.title}</span>
                    <p>{note.Content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>{moment(note.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
    )
    return noteMarkup
}
//here we can also add  ? because compiler will wait until note already get imformed(ex. note?.title)
export default NotesDetail
