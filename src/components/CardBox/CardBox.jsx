import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import styles from "./CardBox.module.css";
import albumImage from "../../assets/static-img.png";

export default function CardBox({ album }) {
  console.log(album);
  return (
    <>
      <Card sx={{ maxWidth: 159 }} className={styles.card}>
        <CardMedia
          component="img"
          height="140"
          image={album?.image} // Update with your image path
          alt={album?.title}
          className={styles.cardImage}
        />
        <CardContent className={styles.cardContent}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={styles.cardFollows}
          >
            {album?.follows}
            {album?.follows ? " Follows" : album?.likes ? " likes" : ""}
          </Typography>
        </CardContent>
        {/* <CardActions className={styles.cardActions}>
        
      </CardActions> */}
      </Card>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        className={styles.songCategory}
      >
        {album?.title}
      </Typography>
    </>
  );
}
