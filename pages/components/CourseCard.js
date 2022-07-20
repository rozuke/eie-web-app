import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import styles from "./components.module.css";

const CourseCard = () => {
  const StyledActionCard = styled(CardActionArea)({});
  return (
    <Card sx={{ width: "15vw", height: 200 }}>
      <CardActionArea style={{ height: "200px" }}>
        <div className={styles.card_container}>
          <div className={styles.filled_name}>
            <Typography gutterBottom variant="h5" component="h2">
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
