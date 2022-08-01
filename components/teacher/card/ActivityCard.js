import { Card, CardActionArea, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import foroLogo from "../../../public/image/foro-logo.png";
import styles from "../components.module.css";

const ActivityCard = ({ courseId }) => {
  return (
    <Card sx={{ minWidth: "200px", maxWidth: "200px", height: 160 }}>
      <Link href={`/teacher/course/${courseId}/activities/forum`}>
        <CardActionArea style={{ height: "160px" }}>
          <div className={styles.card_container_activity}>
            <Image src={foroLogo} />
            {console.log(courseId)}
            <Typography gutterBottom variant="h6" component="div">
              New Forum
            </Typography>
          </div>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ActivityCard;
