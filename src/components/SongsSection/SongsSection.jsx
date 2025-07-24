import React, { useEffect, useState } from "react";
import { Box, Tabs, Tab, Typography, Container } from "@mui/material";
import styles from "./SongsSection.module.css";
import SongCard from "./SongCard";

export default function SongsSection({ title }) {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [activeGenre, setActiveGenre] = useState("All");

  useEffect(() => {
    fetch("https://qtify-backend-labs.crio.do/songs")
      .then((res) => res.json())
      .then(setSongs);

    fetch("https://qtify-backend-labs.crio.do/genres")
      .then((res) => res.json())
      .then((data) => {
        setGenres(["All", ...data.data.map((genre) => genre.label)]);
      });
  }, []);

  const filteredSongs =
    activeGenre === "All"
      ? songs
      : songs.filter((song) => song.genre.label === activeGenre);

  return (
    <Box className={styles.container}>
      <Container>
        <Typography className={styles.sectionTitle}>{title}</Typography>
        <Box className={styles.categories}>
          <Tabs
            value={activeGenre}
            onChange={(e, newValue) => setActiveGenre(newValue)}
            className={styles.customTabs}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            {genres.map((genre) => (
              <Tab
                key={genre}
                label={genre}
                value={genre}
        
                disableTouchRipple
                className={`${styles.tab} ${
                  activeGenre === genre ? styles.activeTab : ""
                }`}
              />
            ))}
          </Tabs>
        </Box>
        <SongCard data={filteredSongs} />
      </Container>
    </Box>
  );
}
