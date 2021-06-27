export const addNote = (note) => {
    return  (dispatch, getState, {getFirestore} ) => {
        const firestore = getFirestore()
        firestore.collection('notes')
        .add({
            ...note,
            favorite:false,
            createdAt: new Date()
        })
        .then(()=>{
            console.log('add the note successfully')
        })
        .catch(err =>{
            console.log(err)
        })
    }
}
export const deleteNote = (note) => {
    return  (dispatch, getState, {getFirestore} ) => {
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).delete()
       
        .then(()=>{
            console.log('Deleted the note successfully')
        })
        .catch(err =>{
            console.log(err)
        })
    }
}

export const toggleFav = (note) => {
    return  (dispatch, getState, {getFirestore} ) => {
        const favStatus = !note.favorite
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            favorite: favStatus
        }).then(()=>{
           console.log("toggle favourite success")
        }).catch(err=>{
            console.log(err)
        })
        
    }
}

export const updateNote = (note) => {
    return  (dispatch, getState, {getFirestore} ) => {
        
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            title: note.title,
            Content: note.Content
        }).then(()=>{
           console.log("toggle favourite success")
        }).catch(err=>{
            console.log(err)
        })
        
    }
}