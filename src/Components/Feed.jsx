import React, {useEffect, useState} from 'react'
import { Stack, Box, Typography} from '@mui/material';
import {SideBar, Vidoes} from './';
import { useFetchData, FetchData } from '../Utils/useFetchData';


const Feed = () => {
  const [isSelected , setIsSelected] = useState("New");
  const [vidoes , setVidoes] = useState([]);
  // const { loading, error, data, refetch } = useFetchData(`search?part=snippet&q=${isSelected}`);
  
  useEffect(() => {
    setVidoes(null);
    FetchData(`search?part=snippet&q=${isSelected}`).then((data)=>{
      setVidoes(data.items);
      console.log(data.items);
    });

  }, [isSelected]);
  return (
    <Stack sx={{ flexDirection: { sx: "Column", md: "row"}}}>
      <Box sx={{ height: {sx: "auto", md: "92vh"}, borderRight: "1px solid #3d3d3d", px :{ sx: 0, md: 2}}}>
        <SideBar isSelected= {isSelected} setIsSelected={setIsSelected}/>
        <Typography className="copyright" varient="body2" sx={{mt : 1.5, color:"#fff"}}>
          copyrights Nidal@2023
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:"auto", height: "95vh", flex: 2}}>
        <Typography sx={{color:"white"}}  varient="h4" fontWeight= "bold" mb={2}>
          {isSelected} <span style={{color: "#F31503"}}>videoes</span>
        </Typography>
        <Vidoes videoes={vidoes}/>
      </Box>
    </Stack>
  )
}

export default Feed