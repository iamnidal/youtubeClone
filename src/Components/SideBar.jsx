import React from 'react'
import { Stack, Box } from '@mui/material';
import {categories } from "../Utils/Constants";

const SideBar = ({isSelected, setIsSelected}) => {
  return (
    <Stack
        direction="row"
        sx={{
            overflowY:"auto",
            height : { sx: "auto", md: "95%"},
            flexDirection: {md :"Column"}
        }}
    >
        {categories.map((category)=>(
            <button className='category-btn' style={{background: category.name === isSelected && '#FC1503',color:"white"}} onClick={() => {setIsSelected(category.name)}} key={category.name}>
                <span style={{color : category.name === isSelected ? "white" : "red", marginRight:'15px'}}>{category.icon}</span>
                <span style={{opacity : category.name === isSelected ? '1' : '0.82'}}>{category.name}</span>
            </button>
        ))}

    </Stack>
  )
}

export default SideBar