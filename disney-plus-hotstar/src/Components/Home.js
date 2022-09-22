import React,{useEffect} from 'react'
import dbConfig from '../Firebase'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Originals from './Originals'
import NewToD from './NewToD'
import Trending from './Trending'
import Hollywood from './Hollywood'
import KidsTv from './KidsTv'
import Popular from './Popular'
import {useDispatch } from 'react-redux';
import { setDisneyMovies } from '../features/Movie/MovieSlice'



function Home() {
  const dispatch = useDispatch();

  
  let populars = [];
  let hollywoods = [];
  let newTos = [];
  let kidsTvs = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    dbConfig.collection("Movies").onSnapshot((snapshot) => {
      snapshot.docs.map(function (doc) {
          switch (doc.data().type) {
              case "popular":
                  populars = [...populars, { id: doc.id, ...doc.data() }];
                  break;
              case "hollywood":
                  hollywoods = [...hollywoods, { id: doc.id, ...doc.data() }];
                  break;
              case "newTo":
                  newTos = [...newTos, { id: doc.id, ...doc.data() }];
                  break;
              case "kidsTv":
                  kidsTvs = [...kidsTvs, { id: doc.id, ...doc.data() }];
                  break;
              case "original":
                  originals = [...originals, { id: doc.id, ...doc.data() }];
                  break;
              case "trending":
                  trending = [...trending, { id: doc.id, ...doc.data() }];
                  break;
              default:
                  break;
          }
      });
      dispatch(setDisneyMovies({
          popular: populars,
          hollywood: hollywoods,
          newTo: newTos,
          kidsTv: kidsTvs,
          original: originals,
          trending: trending
      }))
  });
  },[])
  
  return (
    <Container>
          <ImgSlider />
          <Viewers />
          <Originals />
          <NewToD />
          <Trending />
          <Hollywood />
          <KidsTv />
          <Popular />
    </Container>
  )
}

export default Home

const Container=styled.main`
min-height: calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;
overflow-x:hidden;
 
&:before{
  background:url("/images/home-background.png") center center / cover no-repeat fixed;
  content:"";
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  z-index:-1;

}
`