import styled from 'styled-components'

export const Container = styled.div `
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 100%;
  
  @media (min-width: 320px) and (max-width: 720px){
    position: ${props => props.position? 'absolute' : 'relative'};
  }
  
`

export const ContentSection = styled.div `
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  width: 800px;

  @media (min-width: 320px) and (max-width: 720px){
    width: 300px;
    flex-direction: column-reverse;
  }
`
