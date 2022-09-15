import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu>
            <a>
                <img src="/images/home-icon.svg" alt="img" />
                <span>HOME</span>
            </a>
            <a>
                <img src="/images/search-icon.svg" alt="img" />
                <span>SEARCH</span>
            </a>
            <a>
                <img src="/images/watchlist-icon.svg" alt="img" />
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src="/images/original-icon.svg" alt="img" />
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src="/images/movie-icon.svg" alt="img" />
                <span>MOVIES</span>
            </a>
            <a>
                <img src="/images/series-icon.svg" alt="img" />
                <span>SERIES</span>
            </a>

        </NavMenu>
        <UserImg src="https://images.pexels.com/photos/5753367/pexels-photo-5753367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </Nav>
  )
}

export default Header
const Nav=styled.div`
background-color:#090b13;
height:70px;
display:flex;
align-items:center;
padding:0 36px;
overflow-x:hidden;
`
const Logo=styled.img`
width:80px;


`
const NavMenu=styled.div`
display:flex;
flex:1;
margin-left: 25px;
align-itmes:center;

a{
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;
    img{
        height:20px;


    }
    
    span{
        font-size:13px;
        letter-spacing:1.42px;
        position:relative;

        &:after{
            content:"";
            height:2px;
            background-color:white;
            position:absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transform-orgin:left  center;
            transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;
            transform:scaleX(0);

        }
    }
    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;
        }
    }
}

`
const UserImg=styled.img`
width:48px;
height:48px;
border-radius:50%;
`