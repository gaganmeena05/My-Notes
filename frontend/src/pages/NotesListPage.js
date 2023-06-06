import React, { useEffect, useState } from 'react'
import { useParams,Link} from 'react-router-dom'
import NotesListPages from './NotesListPages';

const NotesListPage = (history) => {
    let noteid = useParams()

    let [notes,setNotes] = useState([])

    let getNotes = async() => {
        if (noteid.id ==='new') return
        let r = '/api/notes/'+noteid.id
        let response = await fetch(r)
        let data = await response.json()
        setNotes(data)
    }

    useEffect(()=>{
        getNotes()
    },[])

    let deleteNote = async() =>{        
        let r = '/api/notes/'+noteid.id+'/delete'
        
        fetch(r,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(notes)
        })
    }

    let createNote = async() =>{        
        let r = '/api/notes/create'
        
        fetch(r,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(notes)
        })
    }

    let updateNote = async() =>{      
        let r = '/api/notes/'+noteid.id+'/update'        
        fetch(r,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(notes)
        })
    }
    
    let handleSubmit = () =>{
        if(noteid.id !== 'new' ){
            updateNote()
        } else if(noteid.id !== 'new' && !noteid.body){
            deleteNote()            
        } else if(noteid.id === 'new' && noteid !== null){
            createNote()
        }

    }

    return (
    <div className='notes'>     
        <div className='note-header'>
            <Link to={'/'}>
                <button onClick={handleSubmit}>
                    &lt;
                </button>
            </Link> 
            {noteid.id !== 'new' ? (
            <Link to={'/'}>
                <button onClick={deleteNote} > 
                    Delete 
                </button>
            </Link>  
            ):(
            <Link to={'/'}>
                <button onClick={createNote}>
                    Done
                </button>
            </Link>  
            )}
        </div>   
        {noteid.id !== 'new' ? (
            <textarea className='note-textarea' onChange={(e) => {setNotes({...notes,'body':e.target.value})}} value={notes.body}> </textarea> 
            ):(
            <textarea className='note-textarea' onChange={(e) => {setNotes({...notes,'body':e.target.value})}}> </textarea>
            )}

    </div>
    )
}
export default NotesListPage