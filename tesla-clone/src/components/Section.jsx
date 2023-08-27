import React from 'react'
import styled from "styled-components"


const Container = styled.div`
width:100vw;
height:100%;
background-size:cover;
background-position:center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
z-index:1;
`
const Text = styled.div`
text-align:center;
padding-top:15vh;
`
const Title = styled.h1`
font-size:5.5vh;
font-weight:600;
`
const Desc = styled.p`
font-size:2.3vh;
opacity:0.85;
text-transform: capitalize;
margin-top:10px;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction:column;
`
const Buttons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding-bottom:4.5vh;
  @media(max-width:768px){
      flex-direction:column;
      gap:20px;
  }
`

const LeftButton = styled.button`
border: none;
outline: none;
height: 45px;
background-color:rgb(60, 59, 59);
color: white;
border-radius: 8px;
cursor: pointer;
padding:10px 15px;
width:280px;
font-weight:500;
font-size:18px;
opacity:0.85;
text-transform: capitalize;
`

const RightButton = styled.button`
border: none;
outline: none;
height: 45px;
color: rgb(96, 96, 96);
background-color: white;
opacity:0.85;
border-radius: 8px;
cursor: pointer;
padding:10px 15px;
width:280px;
font-weight:500;
font-size:18px;
text-transform: capitalize;
`

const DownArrow=styled.img`
height:40px;
animation:animateDown infinite 1.5s;
`



const Section = ({item}) => {

  const {title,desc,leftButton,rightButton,image}=item;


  return (
    <Container style={{backgroundImage:`url("/images/${image}")`}}>
      <Text>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Text>
      <ButtonGroup>
        <Buttons>
          <LeftButton>{leftButton}</LeftButton>
          {
            rightButton && <RightButton>{rightButton}</RightButton>
          }
          
        </Buttons>
        <DownArrow src="/images/down-arrow.svg" />
      </ButtonGroup>

    </Container>
  )
}

export default Section
