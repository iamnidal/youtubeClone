import React, {useState, useEffect} from 'react'
import { Vidoes, ChannelCard } from './';
import { Box, Card } from '@mui/material';
import { useParams } from 'react-router-dom';
import {FetchData} from '../Utils/useFetchData';

const ChannelDetails = () => {
  let { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const fetchResults = async () => {
    const data = await FetchData(`channels?part=snippet&id=${id}`);
    setChannelDetail(data?.items[0]);
    const videosData = await FetchData(`search?channelId=${id}&part=snippet%2Cid&order=date`);
    setVideos(videosData?.items);
  };
  useEffect(()=>{
    fetchResults();
  },[id]);
  return (
    <>
      <Box minHeight="95vh">
        <Box>
          <div style={{
            height:'300px',
            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
          }} />
          <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
        </Box>
        <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
          <Vidoes videoes={videos} />
        </Box>
      </Box>
    </>
  )
}

export default ChannelDetails