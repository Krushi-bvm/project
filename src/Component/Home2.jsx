
import { Box, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import React from 'react'
import Slider from 'react-slick'
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../assets/Images/image 1.png'
import img2 from '../assets/Images/image 2.png'
import img3 from '../assets/Images/image 3.png'
import img4 from '../assets/Images/image 4.png'
import img5 from '../assets/Images/SlideImg.png'
const newStyle = {
  container: {

    textAlign: "center",
    background: "#F7F7F7",
    padding: "30px"

  },
  subTitle: {
    Lineheight: "30.48px",
    fontFamily: "Montserrat",
    fontSize: "20px",

    fontWeight: 300,
    color: "rgba(51, 51, 59, 1)"
  },
  title: {
    fontWeight: 900,
    fontSize: "30px",
    fontFamily: "Montserrat",




  },
  contentContainer: {
    position: "relative", top: "355px",
    '@media screen and (max-width: 1024px)': {
top: "400px",

 },
'@media screen and (max-width: 768px)': {
top: "755px",
 },

  },

 slickSlide: {

    background: "red",
    fontSize: "36px",
    lineheight: "100px",
    margin: "10PX",
    padding: " 2%",
    position: "relative",
    textAlign: "center",

  }
  ,
  subContainer: {
    background: "#DFF4F7",
    textAlign: "center",
    width: "100%",
    position: "absolute",
    overflow: "hidden",
    bottom: 0,
    marginTop: "5%",
    height: "450px",
    left: 0,
    textAlign: "center",
    top: "100%",
    '@media screen and (max-width: 1590px)': {
      flexDirection: "row",
      height: "450px",
      top: "570px",


    },
    '@media screen and (max-width: 1024px)': {
      flexDirection: "row",
      height: "450px",
      top: "590px",


    },
    '@media screen and (max-width: 768px)': {
      flexDirection: "row",
      height: "850px",
      top: "160%",


    },
    transform: "translateY(-50%)",
  },
  containerStyle: {
    position: 'relative',
    marginRight: '60px',
    '&:last-child': {
      marginRight: 0,
    },
    width: '50%',
    height: '50vh',
    
  },
  textStyle: {
    position: 'absolute',
    width: "100%",
    bottom: "2%",
    left: '50%',
    transform: 'translateX(-100%)',
    textAlign: 'start',
    color: 'white',
    padding: '20px',
  },

  customPrevArrow: {
    position: "absolute",
    top: "-9%",
    right: "50px",
    transform: "translateY(-50%)",
    cursor: "pointer",
    zIndex: 1,
    fontSize: "24px",
    color: "rgba(43, 150, 158, 1)",
    background: "#fff",
    display: "block",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  customNextArrow: {
    position: "absolute",
    top: "-9%",
    transform: "translateY(-50%)",
    right: "0px",
    cursor: "pointer",
    fontSize: "24px",
    color: "rgba(43, 150, 158, 1)",
    background: "#fff",
    display: "block",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },


}
const CustomPrevArrow = ({ onClick }) => (
  <div style={newStyle.customPrevArrow} onClick={onClick}>
    <GrFormPrevious fontSize={"35px"} />
  </div>
);

// Custom arrow component for the next arrow
const CustomNextArrow = ({ onClick }) => (
  <div style={newStyle.customNextArrow} onClick={onClick}>
    <MdNavigateNext fontSize={"35px"} />
  </div>
);
const data = [
  {
    id: "1",
    name: " Aliva Prava Jardin",
    img: img5,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: "2",
    name: " Aliva Prava Jardin",
    img: img5,

    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

  },
  {
    id: "3",
    name: " Aliva Prava Jardin",
    img: img5,

    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: "4",
    name: " Aliva Prava Jardin",
    img: img5,

    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: "5",
    name: " Aliva Prava Jardin",
    img: img5,

    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }

]

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
  prevArrow: <CustomPrevArrow />, // Custom component for the previous arrow
  nextArrow: <CustomNextArrow />, // Custom component for the next arrow

};

function Home2() {

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', position: "relative" }}>
        <Box sx={{ position: "relative" }}>
          <Box sx={newStyle.container}>
            <Box sx={{ zIndex: 2, position: 'relative' }}>
              <Typography sx={newStyle.title}>Property development appraisal</Typography>
              <Typography sx={newStyle.subTitle}> Reduce risk and save time on every project </Typography>
              <Box sx={{ borderRadius: "2%", marginTop: "40px", textAlign: 'center', alignItems: 'center', display: "flex", justifyContent: "center", }}>
                <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
              </Box>
            </Box>
          </Box>
          <Box sx={newStyle.subContainer}>

            <Box sx={{ marginTop: "100px" }}>
              <Typography sx={newStyle.title}>Trusted by industry leaders</Typography>
              <Typography sx={newStyle.subTitle}> Reduce risk and save time on every project </Typography>
            </Box>
            <Box
              sx={{
                display: "flex", justifyContent: "center", alignItems: "center",
                flexDirection: "column", gap: "30px",
                margin: "40px",
                paddingBottom: "300px",
                '@media screen and (min-width: 768px)': {
                  flexDirection: "row",

                },
              }}
            >
              <img src={img1} style={{ maxWidth: "100%", height: "auto", maxHeight: "300px" }} />
              <img src={img2} style={{ maxWidth: "100%", height: "auto", maxHeight: "300px" }} />
              <img src={img3} style={{ maxWidth: "100%", height: "auto", maxHeight: "300px" }} />
              <img src={img4} style={{ maxWidth: "100%", height: "auto", maxHeight: "300px" }} />
            </Box>

            {/* <Box sx={{
            display: "flex", flexDirection: { md: "row", sm: "column" }, justifyContent: "center", alignItems: "center", gap: "50px", margin: "40px",
            paddingBottom: "300px",
          }}>

            <img src={'/image_7.png'} />
            <img src={'/image_8.png'} />
            <img src={'/image_9.png'} />
            <img src={'/image_10.png'} />
          </Box> */}




          </Box>
        </Box>

        <Box sx={{ padding: "40px", position: "relative" }}>

          <Box sx={newStyle.contentContainer}>
            <Typography sx={newStyle.title}>Popular Residences.</Typography>
            <Typography sx={newStyle.subTitle}>Our Expertise in matching you with homes that suit your lifestyle and aspirations.
              Discover a seamless real estate.</Typography>

            <Box sx={{ marginTop: "40px" }}>
              <Slider {...settings}>
                {data.map((data) => (
                  <Box
                    key={data.id}
                    sx={{
                      ...newStyle.containerStyle,
                    }}
                  >
                    <img
                      style={{ width: "94%", height: '50vh', background: 'cover', borderRadius: '15px' }}
                      src={data.img}
                      alt="Description"
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 10,
                        width: "100%",
                        textAlign: "start",
                        padding: "20px",
                        color: "#fff",
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
                        {data.name}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {data.content}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Box>

        </Box>
      </Box>




    </>
  )
}

export default Home2;
