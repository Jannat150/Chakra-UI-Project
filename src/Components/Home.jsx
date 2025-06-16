import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
import { transform } from 'framer-motion';
import Footer from './Footer';

const HeadingOptions={
    pos:"absolute",
    left:"40%",
    top:"40%",
    transform:"translate(-50% -50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4xl"
    
}


const Home = () => {
  return (
    <div>
        <Box>
     <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showArrows={false} showThumbs={false}>
     <Box w={"full"} h={"100vh"}>
        <img src={img1}/>
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...HeadingOptions}>Watch the Future</Heading>
     </Box>
     <Box w={"full"} h={"100vh"}>
        <img src={img2}/>
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...HeadingOptions}>Future is Gaming</Heading>
     </Box>
     <Box w={"full"} h={"100vh"}>
        <img src={img3}/>
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...HeadingOptions}>Gaming on Console</Heading>
     </Box>
     <Box w={"full"} h={"100vh"}>
        <img src={img4}/>
        <Heading bgColor={"blackAlpha.600"} color={"white"}{...HeadingOptions}>Night Life is Cool</Heading>
     </Box>
     </Carousel>

     <Container maxW={"container.xl"} minH={'100vh'} p={"16"}>
        <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"} borderBottom={'2px solid'} m={"auto"}>Services</Heading>
        <Stack h="full" p={4} alignItems={'center'} direction={['column','row']}>
            <Image h={['40','400']} src={img5} alt="" />
            <Text letterSpacing={"widest"} lineHeight={"190%"} textAlign={"center"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam nobis quo inventore ab similique, illo hic molestias magnam sed, nemo mollitia quos corporis accusantium eaque. Repudiandae repellendus tempore voluptates.</Text>

        </Stack>
     </Container>

     <Footer/>

        </Box>
      
    </div>
  )
}

export default Home
