import React, { useState } from 'react'
import styled from "styled-components"

const Container = styled.div`
min-height:70px;
position:fixed;
top:0;
left:0;
right:0;
display: flex;
align-items: center;
justify-content: space-between;
padding:0 20px;
z-index:1;
`
const Logo = styled.img`
height:35px;
`
const List = styled.ul`
display:flex;
list-style: none;
gap:15px;
align-items: center;
@media(max-width:768px){
  display:none;
}
`
const ListItems = styled.li`

`
const Links = styled.a`
text-decoration: none;
color:inherit;
cursor:pointer;
text-transform: uppercase;
font-weight: bold;
font-size:16px;
font-weight:500;

`

const NavRight = styled.div`
display: flex;
align-items:center;
gap:15px;
`


const Hamburger = styled.div`

`
const HamburgerMenu = styled.div`
background:white;
width:300px;
position:fixed;
top:0;
right:0;
bottom:0;
padding:20px;
z-index:2;
transform:${props =>props.show ? 'translateX(0)' :  'translateX(100%)' };
transition:all 0.5s ease;
li{
  list-style:none;
  padding:20px 0;
  border-bottom:1px solid lightgray;
  a{
     text-decoration:none;
     font-weight:600;
     cursor:pointer;
  }
}

`

const Closeicon = styled.div`
display:flex;
justify-content:flex-end;
`

const Header = () => {

  const [open,setOpen]=useState(false)
  
  return (
    <Container>
      <Logo src="/images/logo.svg" />
      <List>
        <ListItems>
          <Links> Model S</Links>
        </ListItems>
        <ListItems>
          <Links> Model 3</Links>
        </ListItems>
        <ListItems>
          <Links> Model X</Links>
        </ListItems>
        <ListItems>
          <Links> Model Y</Links>
        </ListItems>
        <ListItems>
          <Links> Solar roof</Links>
        </ListItems>
        <ListItems>
          <Links> Solar panel</Links>
        </ListItems>

      </List>
      <NavRight>
        <Links>shop</Links>
        <Links>Tesla Account</Links>
        <Hamburger onClick={() =>setOpen(true)}>
          <i className="fa-solid fa-bars" style={{cursor:"pointer"}}></i>
          </Hamburger>
      </NavRight>
     
        <HamburgerMenu show={open}>
        <Closeicon onClick={() =>setOpen(false)}>
          <i className="fa-solid fa-xmark" style={{cursor:"pointer"}}></i>
        </Closeicon>
        <li><a>Existing Inventory</a></li>
        <li><a>used Inventory</a></li>
        <li><a>Trade-in</a></li>
        <li><a>Cybertruck</a></li>
        <li><a>Roadaster</a></li>
        <li><a>Existing Inventory</a></li>
        <li><a>Existing Inventory</a></li>
        <li><a>Existing Inventory</a></li>
      </HamburgerMenu>
  
    
    </Container>
  )
}

export default Header
