import React, {useState, useEffect} from 'react';

import {Container, ImgBlock, Img, AttractionName, SocialMedia, TicketmasterLink, 
  Link, SocialTitle} from './styles';

function InfoSection (attractionInfo) {

  const [ attraction, setAttraction ] = useState([]);
  const [ links, setLinks ] = useState(null);

  useEffect(() => {
    setAttraction(attractionInfo.attraction)
    checkInfos()
  });

  function checkInfos() {
    console.log(typeof attraction.externalLinks)
    if(attractionInfo.attraction.externalLinks === undefined){
      setLinks(null)
      console.log(links, 'sem links')
    }else{
      setLinks(attraction.externalLinks)
      console.log(links, 'links')
    }
  }

  return(
    <Container show={attraction.name? true : false}>
      <ImgBlock> 
       { attraction.images ? 
        <Img src={attraction.images[0].url} width={attraction.images[0].width} height={attraction.images[0].height} alt="img"/>
        :
        <></>
        }
      </ImgBlock>
      <AttractionName>{attraction.name}</AttractionName>
      {
        links ? 
        <SocialMedia>
          <SocialTitle>Socials</SocialTitle>
          {
            links.instagram? 
            <Link href={links.instagram[0].url} target="_blank" rel="noreferrer">Instagram</Link>
            :
            <Link href={links.twitter[0].url} target="_blank" rel="noreferrer">Twitter</Link>

          }
          <Link href={links.homepage[0].url} target="_blank" rel="noreferrer">Homepage</Link>
          {
            links.spotify? 
            <Link href={links.spotify[0].url} target="_blank" rel="noreferrer">Spotify</Link>
            :
            <Link href={links.youtube[0].url} target="_blank" rel="noreferrer">Youtube</Link>

          }
        </SocialMedia>
        :
        <SocialMedia>
          {/* <span>TicketMaster does not have the Social Media for this attraction</span> */}
        </SocialMedia>
      }
      {
        !attraction.url ? 
        <></>
        :
        <TicketmasterLink>
          <span>Feel free to check in TicketMaster Page</span>
          <Link href={attraction.url} target="_blank" rel="noreferrer">{attraction.name} at TicketMaster</Link>
        </TicketmasterLink>
      }
    </Container>
  )
}

export default InfoSection;
