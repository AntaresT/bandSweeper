import styled from 'styled-components'

export const Container = styled.div `
  display: ${props => props.show? 'flex' : 'none'};
  flex-direction: column;
  height: 600px;
  overflow-y: scroll;
  width: 400px;

  @media (min-width: 320px) and (max-width: 720px){
    border-top: 2px solid black;
    margin-top: 10px;
    overflow-y: initial;
    width: 300px;
  }
`

export const VideoItem = styled.a `
  align-items: center;
  border-bottom: 1px solid grey;
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  text-decoration: none;
  margin-top: 5px;
  transition: transform .5s;


  &:link {
    color: black;
  }

  &:hover {
    color: blue;
    transform: scale(1.1);
  }

  &:visited {
    color: black;
  }
`

export const ImgThumbnail = styled.img `
  height: 180px;
  width: 320px;
`

export const InfoVideo = styled.div `
  display: flex;
  flex-direction: column;
`

export const Title = styled.span `
  margin-top: 5px;

`

export const Channel = styled.span ` 
  text-align: right;
  margin-top: 5px;

`

export const Description = styled.span `
  font-size: 12px;
  margin-top: 5px;
`
