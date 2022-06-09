import React from 'react';
import {videos, ticketMaster} from '../../Services/api';
import {Container, SearchBar, Title, SubmitBtn, InputSection, Logo} from './styles'

import SweeperLogo from '../../assets/Logo_music_SVG.svg'

function SearchBox ({searchItem, onChange, addVideosList, addAttraction}) {

  async function getVideosIdList (item) {
    await videos.getVideosId(`?part=snippet&q=${item}`)
    .then((res) => {
      let resData = res.data.items
      let itemsList = []
      resData.map((item) => itemsList.push(item))
      addVideosList(itemsList)
    },
    (err) => {
      console.log(err)
    })
  }

  async function getAttraction (bandName) {
    await ticketMaster.getEvents(`?apikey=${process.env.REACT_APP_TICKETMASTER_KEY}&keyword=${bandName}`)
    .then((res) => {
      addAttraction(res.data._embedded.attractions[0])
    },
    (err) => {
      console.log(err)
    })
  }

  function handleSubmit () {
    getVideosIdList(searchItem)
    getAttraction(searchItem)
  }

  function keyboardHandler (target) {
    if (target.code === 'Enter'){
      handleSubmit()
    }
  }

  return(
    <Container>
      <Logo src={SweeperLogo} alt="logo" />
      <Title>Band Sweeper</Title>
      <InputSection>
        <SearchBar type='text' value={searchItem} onChange={onChange} onKeyDown={(e) => {keyboardHandler(e)}}/>
        <SubmitBtn type='submit' onClick={handleSubmit}>Search</SubmitBtn>
      </InputSection>
    </Container>
  )
}

export default SearchBox;
