import axios from 'axios';

const apiYouTube = axios.create({
  baseURL: process.env.REACT_APP_GOOGLE_URI,
  params: {
    key: process.env.REACT_APP_YOUTUBE_KEY
  }
});

const apiTicketMaster = axios.create({
  baseURL: process.env.REACT_APP_ROOT_URI_TICKET
})

const header = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'content-type': 'application/json',
  'accept': 'application/json',
}

const videos = {
  getVideosId: (data) => apiYouTube.get(`search/${data}`, header),
  getVideosList: (data) => apiYouTube.get(`videos/${data}`, header)
}

const ticketMaster = {
  getEvents: (data) => apiTicketMaster.get(`attractions/${data}`, header)
}

export {videos, ticketMaster};
