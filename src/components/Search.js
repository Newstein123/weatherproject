import React, { useState } from 'react'
import {FiSearch} from 'react-icons/fi'

const Search = ({fetchData}) => {

  const [search, setSearch] = useState('')

  return (
    <div className='d-flex justify-content-between align-items-center mt-3'>
        <input onChange={(e)=> setSearch(e.target.value)} placeholder='Enter your city name..' className='form-control'/>
        <FiSearch size={40} className="ms-3 bg-primary rounded p-2 text-white" onClick={() =>fetchData(search) } />
    </div>
  )
}

export default Search
