import React from 'react'
import { Link } from 'react-router-dom'

let getTitle = (note) => {
  let title = note.body.split("\n")[0]
  if (title.length > 45){
    return title.slice(0,45)
  }
  return title
}

let getTime = (note) =>{
  return new Date(note.updated).toLocaleDateString()
}

let getbody = (note) => {
  let title = note.body.split("\n")[0]
  let content = note.body.replace('\n',' ')
  if (content.length > 45){
    title = title.slice(0,45)
    content = content.slice(46)
  }
  else{
    content = content.slice(title.length)
  }

  // content = content.body.replace(title,' ')

  if (content.length > 45){
    return title.slice(0,45) + '....'
  }
  return content
}

const ListItem = ({note}) => {
    let r = '/notes/'+note.id
  return (
    <Link to={r}>
      <div className='notes-list-item'>
        <h3> <b> {getTitle(note)} </b> </h3>
        <h5> {getbody(note)} </h5>
        <h5> {getTime(note)} </h5>
      </div>
    </Link>
  )
}

export default ListItem
