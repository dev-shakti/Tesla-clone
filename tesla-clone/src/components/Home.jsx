import React from 'react'
import Section from './Section'
import styled from "styled-components"
import { data } from '../data'
const Container=styled.div`
height:100vh;
`

const Home = () => {
  return (
    <Container>
      {
        data.map((item) => {
          return  <Section item={item} key={item.id}/>
        })
      }
    
    </Container>
  )
}

export default Home
