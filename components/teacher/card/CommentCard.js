import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

const CommentCard = ({ comentario }) => {
  const chartsAvatar = (name) => {
    const avatar = name.split(" ");
    const firstLetter = avatar[0][0];
    const lastLetter = avatar[1][0];
    return `${firstLetter}${lastLetter}`;
  };
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: "#56AFDE" }}>
            {chartsAvatar(comentario.nombre)}
          </Avatar>
        }
        title={comentario.nombre}
        subheader={comentario.email}
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary">
          {comentario.contenido}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
