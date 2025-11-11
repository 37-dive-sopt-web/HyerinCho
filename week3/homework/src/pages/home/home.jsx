import { useState } from "react";

import GameBoard from "@components/game-board/game-board";
import Header from "@components/header/header";
import RankingBoard from "@components/ranking-board/ranking-board";

import * as styles from "./home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState("game");

  const handleClickTab = () => {
    setActiveTab((prev) => (prev === "game" ? "rank" : "game"));
  };

  return (
    <div className={styles.homeContainer}>
      <Header active={activeTab === "game"} onClick={handleClickTab} />
      {activeTab === "game" ? <GameBoard /> : <RankingBoard />}
    </div>
  );
};

export default Home;
