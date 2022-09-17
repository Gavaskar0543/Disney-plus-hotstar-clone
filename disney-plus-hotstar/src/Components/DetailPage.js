import React from 'react'
import styled from 'styled-components'

function DetailPage() {
  return (
    <Container>
     <Background>
       <img src="https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg" />
     </Background>
     <ImageTittle>
       <img src="/images/Bao.png" />
     </ImageTittle>

     <Controls>
         <PlayButton>
             <img src="/images/play-icon-black.png" />
             <span>PLAY</span>
         </PlayButton>
         <TrailerButton>
         <img src="/images/play-icon-white.png" />
             <span>TRAILER</span>
         </TrailerButton>
         <AddButton>

         </AddButton>
         <GroupWatchButton>

         </GroupWatchButton>
     </Controls>

    </Container>
  )
}

export default DetailPage

const Container=styled.div`
min-height: calc(100vh-70px);
padding: 0 calc(3.5vw+5px);
position:relative;



`
const Background = styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1;
opacity:0.8;

img{
  width:100%;
  height:100%;
  object-fit:cover;
}

`
const ImageTittle=styled.div`
height:30vh;
min-height:170px;
width:35vw;
min-width:200px;

img{
  width:100%;
  height:100%;
  object-fit:contain;
}

`

const Controls=styled.div`
display:flex;


`
const PlayButton =styled.button`
border-radius:4px;
font-size:15px;
padding:0px 24px;
margin-right:22px;
display:flex;
align-items:center;
height:56px;
background-color:rgb(249,249,249);
border:none;
letter-spacing:1.8px;
cursor:pointer;

&:hover{
  background:rgb(198,198,198);
}
`
const TrailerButton =styled(PlayButton)`
background-color:rgba(0,0,0,0.3)`

const AddButton=styled.button``

const GroupWatchButton =styled.button``