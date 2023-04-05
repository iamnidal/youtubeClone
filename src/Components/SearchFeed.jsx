import React, {useEffect, useState} from 'react'
import { Box, Typography} from '@mui/material';
import { Vidoes} from './';
import { useFetchData, FetchData } from '../Utils/useFetchData';
import { useParams } from 'react-router-dom';


const SearchFeed = () => {
  const { searchid } = useParams();
  const [vidoes , setVidoes] = useState([]);
  
  useEffect(() => {
    setVidoes(null);
    FetchData(`search?part=snippet&q=${searchid}`).then((data)=>{
      setVidoes(data.items);
      console.log(data.items);
    });

  }, [searchid]);
  return (
    <Box p={2} sx={{overflowY:"auto", height: "95vh", flex: 2}}>
      <Typography sx={{color:"white"}}  varient="h4" fontWeight= "bold" mb={2}>
        Search result for: <span style={{color: "#F31503"}}>{searchid}</span>videoes
      </Typography>
      <Vidoes videoes={vidoes}/>
    </Box>
  )
}

export default SearchFeed