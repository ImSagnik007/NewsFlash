import React, { useState, useEffect } from "react";
import NewsCardContainer from "../../NewsCardContainer";
import LaLiga from "./FootballLeagues/LaLiga";
import EPL from "./FootballLeagues/EPL";
import Ligue1 from "./FootballLeagues/Ligue1";

const apiKey_SA = "58a6e0b58a6243b8900dc02ef32c8d03";
const apiKey_SG = "4eaa5190ac7844a787e3173728a3ae0f";

const SportsScores = () => {
  return (
    <>
      <div>
        <LaLiga />
        <EPL />
        <Ligue1 />
      </div>
    </>
  );
};

export default SportsScores;
