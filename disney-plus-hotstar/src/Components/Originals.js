import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectOriginal } from '../features/Movie/MovieSlice';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Originals = () => {
    const movies = useSelector(selectOriginal);
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 991, settings: { slidesToShow: 3 } },
            { breakpoint: 767, settings: { slidesToShow: 2 } },
            { breakpoint: 425, settings: { slidesToShow: 1 } }
        ]
    };
    return (
        <>
            <Title>Originals</Title>
            <Carousel>
                {
                    movies && movies.map((val,index) => (
                        <Wrap key={index}>
                            <NavLink  to={`/detail/${val.id}`}>
                                   <img src={val.CardImg} alt="img" />
                            </NavLink>
                        </Wrap>
                    ))
                }
            </Carousel>
        </>
    );
};
const Title = styled.h2`
    margin: 2vh 0 1vh 2rem;
    text-transform: uppercase;
    font-weight: 400 !important;
    text-shadow: 0.1rem 0.1rem 1rem rgba(255,255,255,0.2);
    @media screen and (min-width: 550px) and (max-width: 767px){
        font-size: 1.1rem;
    }
    @media screen and (min-width: 280px) and (max-width: 550px){
        font-size: 0.9rem;
    }
`;
const Carousel=styled.div`
display:grid;
grid-gap:25px;
grid-template-columns:repeat(4,minmax(0,1fr));
`
const Wrap =styled.div`

border-radius:10px;
cursor:pointer;
overflow:hidden;
border:3px solid rgba(249,249,249,0.1);
box-shadow:rgb(0 0 0/69%) 0px 26px 30px -10px,
rgb(0 0 0/ 73%) 0px 16px 10px -10px;
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
img{
    width:100%;
    height:100%;
    object-fit:cover;
    
}
&:hover{
    transform:scaleX(1.05);
    box-shadow:rgb(0 0 0/69%) 0px 26px 30px -10px,
rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    border-color:rgba(249,249,249,0.8);
}
`
export default Originals;