import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Button, Grid, Typography } from "@mui/material";
import CardBox from "../CardBox/CardBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AlbumsSection.module.css";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function AlbumsSection({ fetchUrl, title }) {
  const [albumdata, setAlbumdata] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const slidesToShow = showAll ? albumdata.length : 7;

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
    if (isLastSlide) return null;
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
          borderRadius: "53px",
          width: "26px",
          height: "26px",
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
    if (!isLastSlide) return null;
    return (
      <div
        style={{
          position: "absolute",
          right: 8,
          top: "40%",
          zIndex: 2,
          background: "#34c94b",
          cursor: "pointer",
          fontSize: "24px",
          color: "white",
          width: "26px",
          height: "26px",
          borderRadius: "53px",
          padding: "6px 2px 6px 14px",
        }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faAngleRight} />
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
    nextArrow: <CustomPrevArrow className={styles.nextArrow} />,
  };

  return (
    <Box sx={{ background: "#111", padding: 2, borderRadius: "10px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ color: "#fff", marginBottom: 2 }}>
          {title}
        </Typography>
        <Button
          className={styles.showAllbtn}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Collapse" : "Show all"}
        </Button>
      </Box>

      <Box className={showAll ? styles.gridslider : styles.slider}>
        {showAll ? (
          <Grid container spacing={2}>
            {albumdata.map((album, index) => (
              <Grid item xs={12} key={index} className={styles.gridItem}>
                <CardBox  album={album} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Slider {...settings}>
            {albumdata.map((album, index) => (
              <CardBox key={index} album={album} />
            ))}
          </Slider>
        )}
      </Box>
    </Box>
  );
}
