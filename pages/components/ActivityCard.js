import { Card, CardActionArea, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import foroLogo from "../../public/image/foro-logo.png";
import styles from "./components.module.css";

const ActivityCard = () => {
  return (
    <Card sx={{ width: "12vw", height: 160 }}>
      <CardActionArea style={{ height: "200px" }}>
        <div className={styles.card_container_activity}>
          <Image src={foroLogo} />
          <Typography gutterBottom variant="h6" component="div">
            New Forum
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default ActivityCard;
