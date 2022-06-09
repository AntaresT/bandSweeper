import styled from 'styled-components'

export const Container = styled.div `
  display: ${props => props.show? 'flex' : 'none'};
  flex-direction: column;
  height: 600px;
  width: 300px;
  overflow-y: hidden;
  padding: 20px 40px;

  @media (min-width: 320px) and (max-width: 720px){
    height: auto;
    padding: 0;
  }
`

export const ImgBlock = styled.div `
  display: flex;
  flex-direction: row;
`

export const Img = styled.img `
  border-radius: 8px;
  height: 180px;
  width: 300px;
`

export const AttractionName = styled.span `
  margin-top: 10px;
`

export const SocialMedia = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 10px;

`

export const TicketmasterLink = styled.div `
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`

export const Link = styled.a `
  text-decoration: none;

  &:link {
    color: blue;
  }

  &:hover {
    color: grey;
  }

  &:visited {
    color: blue;
  }
`

export const SocialTitle = styled.div `
  border-bottom: 1px solid black;
`
