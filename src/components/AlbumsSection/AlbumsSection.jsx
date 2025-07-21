import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import CardBox from "../CardBox/CardBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function AlbumsSection({ fetchUrl, title }) {
  const [albumdata, setAlbumdata] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 7;

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setAlbumdata(data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };
    fetchAlbums();
  }, [fetchUrl]);

  const isLastSlide = currentSlide >= albumdata.length - slidesToShow;

  const CustomPrevArrow = ({ onClick }) => {
    if (isLastSlide) return null; // Hide left arrow when last items are visible
    return (
      <div
        style={{
          position: "absolute",
          left: -7,
          top: "40%",
          zIndex: 2,
          cursor: "pointer",
          fontSize: "24px",
          color: "white",
          background: "#34c94b",
          borderRadius: "25%",
          width: "26px",
          height: "26px",
          borderRadius: "53px",
          padding: "6px",
          paddingLeft: "11px",
        }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faAngleLeft} style={{ fontSize: "26px" }} />
      </div>
    );
  };

  const CustomNextArrow = ({ onClick }) => {
    if (!isLastSlide) return null; // Show right arrow only on last set
    return (
      <div
        style={{
          position: "absolute",
          right: -25,
          top: "40%",
          zIndex: 2,
          cursor: "pointer",
          fontSize: "24px",
          color: "white",
        }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    afterChange: (index) => setCurrentSlide(index),
    prevArrow: <CustomNextArrow />,
    nextArrow: <CustomPrevArrow />,
  };

  return (
    <Box sx={{ background: "#111", padding: 2, borderRadius: "10px" }}>
      <Typography variant="h5" sx={{ color: "#fff", marginBottom: 2 }}>
        {title}
      </Typography>
      <Slider {...settings}>
        {albumdata.map((album, index) => (
          <CardBox key={index} album={album} />
        ))}
      </Slider>
    </Box>
  );
}
