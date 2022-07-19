import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import styles from "../components.module.css";

const CourseCard = () => {
  return (
    <Card sx={{ maxHeight: 200, maxWidth: 200 }}>
      <CardActionArea style={{ height: "200px" }}>
        <div className={styles.card_container}>
          <div className={styles.filled_name}>
            <Typography gutterBottom variant="h5" component="div">
              CB1
            </Typography>
          </div>
          <Typography gutterBottom variant="h6" component="div" mt={1}>
            Course Book 1
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default CourseCard;
