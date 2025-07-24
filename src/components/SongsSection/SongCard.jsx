
import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import CardBox from "../CardBox/CardBox";
import styles from "./SongsSection.module.css";

export default function SongCard({  data }) {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  return (
    <Box className={styles.sectionContainer}>
      
      <Slider {...settings} className={styles.Songslider}>
        {data.map((item, index) => (
          <CardBox key={index} album={item} />
        ))}
      </Slider>
    </Box>
  );
}
