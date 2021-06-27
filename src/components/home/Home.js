import React from 'react'
import Form from './Form'
import { useSelector } from 'react-redux' ;
import { useFirestoreConnect } from 'react-redux-firebase'
import NotesList from '../notes/NotesList'
const Home = () => {
    useFirestoreConnect([{collection:'notes',orderBy:['createdAt','desc']}]) //desecding so the latest one will be on top
    const notes = useSelector((state)=>state.firestore.ordered.notes)
    console.log(notes)
    return (
        <div className="contaimner">
            <div className="row center-align">
                <div className="col s7"><Form/></div>
                <div className="col s5 "><NotesList notes={notes}/></div>
            </div>
        </div>
    )
}

export default Home
