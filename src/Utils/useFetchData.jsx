import axios from "axios";
import { useQuery } from "react-query";


const BaseURL= 'https://youtube-v31.p.rapidapi.com'

// const options = {
//     params: {
//         maxResults: '50',
//         relatedToVideoId: '7ghhRHRP6t4',
//         part: 'id,snippet',
//         type: 'video',
//     },
//     headers: {
//         'X-RapidAPI-Key': '0a3235168fmsh745be600f6583a0p1c40fbjsnca5bb8b3de08',
//         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }
// };
const options = {
    params: {
      maxResults: 50,
    },
    headers: {
      'X-RapidAPI-Key': '0a3235168fmsh745be600f6583a0p1c40fbjsnca5bb8b3de08',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };

export const FetchData = async (url) =>{
    const {data} = await axios.get(`${BaseURL}/${url}`, options);
    return data;
}

export const useFetchData = (url) =>{
    return useQuery([`Fetch${url}`], () => FetchData(url));
}

