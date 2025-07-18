import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import CardBox from "../CardBox/CardBox";

export default function AlbumsSection({ fetchUrl, title }) {
  const [albumdata, setAlbumdata] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
  };

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
  }, []);
  return (
    <Box sx={{ background: "#111", padding: 2, borderRadius: "10px" }}>
      <Typography variant="h5" sx={{ color: "#fff", marginBottom: 2 }}>
       {title}
      </Typography>
      <Slider {...settings}>
        {albumdata.map((album) => {
          return <CardBox album={album} />;
        })}
      </Slider>
    </Box>
  );
}
