import React from 'react'
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from "../Utils/Constants"

const VideoCard = ({video : {id: {videoId}, snippet}}) => {
  return (
    <Card sx={{ width : { md: '320px', ms: "100%"}}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url}  alt={snippet?.title} sx={{width: 358, height: 180}}/>
        </Link>
        <CardContent sx={{backgroundColor: "#1e1e1e", height: '106px'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography varient="subtitle1" fontWeight="bold" color="#fff">{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</Typography>
            </Link>
            <Link to={snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl}>
                <Typography varient="subtitle1" fontWeight="bold" color="#fff">{snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                <CheckCircle sx={{fontSize: 12, color:"grey", ml: '5px'}} /></Typography> 
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard