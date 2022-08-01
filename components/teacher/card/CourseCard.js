import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useCourse } from "../../../context/courseContext";
import styles from "../components.module.css";

const CourseCard = ({ course }) => {
  const { getCourseForUpdate } = useCourse();
  const router = useRouter();
  const formatFillString = () => {
    return `${course.nombre.substring(0, 1)}B${course.libroId}`;
  };
  return (
    <Card sx={{ maxHeight: 200, maxWidth: 200 }}>
      <CardActionArea
        style={{ height: "200px" }}
        onClick={() => {
          getCourseForUpdate(course);
          router.push(`teacher/course/${course.cursoId}/activities`);
        }}
      >
        <div className={styles.card_container}>
          <div className={styles.filled_name}>
            <Typography gutterBottom variant="h5" component="div">
              {formatFillString()}
            </Typography>
          </div>
          <Typography gutterBottom variant="h6" component="div" mt={1}>
            {course.nombre}
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default CourseCard;
