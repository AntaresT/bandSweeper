import React, { useState, useEffect } from 'react';

import {Container, VideoItem, ImgThumbnail, InfoVideo,
Title, Channel, Description} from './styles'

function VidSection (videosList) {

  const [list, setList] = useState([]);

  useEffect(() => {
    setList(videosList.videos) 
  }, [videosList]);

  return( 
    <Container show={list[0]? true : false}>
      {
        list.map((item, index) => (
          <VideoItem key={index} href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="__blank" rel="noreferrer">
            <ImgThumbnail src={item.snippet.thumbnails.medium.url} alt='thumbnail' />
            <InfoVideo>
              <Title>{item.snippet.title}</Title>
              <Channel>{item.snippet.channelTitle}</Channel>
              <Description>{item.snippet.description}</Description>
            </InfoVideo>
          </VideoItem>
        ))
      }
    </Container>
  )
}

export default VidSection;
