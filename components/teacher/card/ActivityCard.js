import { Card, CardActionArea, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../components.module.css";

const ActivityCard = ({ courseId, image, title, page }) => {
  return (
    <Card sx={{ minWidth: "200px", maxWidth: "200px", height: 160 }}>
      <Link href={`/teacher/course/${courseId}/activities/${page}`}>
        <CardActionArea style={{ height: "160px" }}>
          <div className={styles.card_container_activity}>
            <Image src={image} />
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
          </div>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ActivityCard;
