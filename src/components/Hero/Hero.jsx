import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1 className={styles.title}>100 Thousand Songs, ad-free</h1>
        <h1 className={styles.title}>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={require("../../assets/hero_headphones.png")}
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
