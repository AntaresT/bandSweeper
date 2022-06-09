import React, { useState } from 'react';
import SearchBox from '../SearchBox';
import VidSection from '../VidSection';
import InfoSection from '../InfoSection';

import {Container, ContentSection} from "./styles"

function Sweeper () {

  const [itemToSearch, setItemToSearch] = useState('');
  const [videosList, setVideosList] = useState([]);
  const [attractionInfo, setAttractionInfo] = useState({});

  return(
    <Container position={videosList===[]? true : false}>
      <SearchBox 
        searchItem={itemToSearch} 
        onChange={ (e) => {setItemToSearch(e.target.value)} }
        addVideosList={setVideosList}
        addAttraction={setAttractionInfo}
      />
      <ContentSection>
        <VidSection videos={videosList}/>
        <InfoSection attraction={attractionInfo}/>
      </ContentSection>
    </Container>
  )
}

export default Sweeper;
