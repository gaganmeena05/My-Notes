import React from 'react'
import {Link} from 'react-router-dom'

const AddButton = () => {
  return (
    <div >
    <Link to="/notes/new">
    <button className='floating-button'>
      +
    </button>
    </Link>
    </div>
  )
}
export default AddButton