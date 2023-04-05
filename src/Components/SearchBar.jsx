import React, { useState } from 'react'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [ search ,setSearch ] = useState("");
  const navigate = useNavigate();
  const handleNavigate = () =>{
    navigate(`/search/${search}`)
  }
  return (
    <Paper
      component="form"
      onSubmit={handleNavigate}
      sx={{borderRadius: 20, border: '1px solid #e3e3e3', pl:2, boxShadow:'none', mr:{sm:5} }}
    >
      <input className='search-bar' onChange={(e)=>setSearch(e.target.value)} value={search} placeholder='Search...'/>
      <IconButton type='submit' sx={{ p :'10px', color:"red"}}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar