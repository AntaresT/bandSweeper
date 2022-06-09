import styled from 'styled-components'

export const Container = styled.div `  

  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;


  @media (min-width: 320px) and (max-width: 720px){
    align-items: center;
  }
`

export const SearchBar = styled.input `
  border-radius: 6px;
  height: 30px;
  margin-right: 10px;
  width: 400px;
  
  @media (min-width: 320px) and (max-width: 720px){
    width: 300px;
  }

`

export const Title = styled.span `
  font-size: 24px;
`

export const SubmitBtn = styled.button `
  width: 100px;
  height: 35px;
  transition-duration: 0.4s;
  border: 2px solid;
  border-radius: 6px;
  background-color: white;
  &:hover {
    background-color: #2980b9; 
    color: white;
  }

  @media (min-width: 320px) and (max-width: 720px){
    margin-top: 10px;
  }
`

export const InputSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  @media (min-width: 320px) and (max-width: 720px){
    align-items: end;
    flex-direction: column;
  }

`

export const Logo = styled.img `
  height: 200px;
  width: 200px;
`
