import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

const CommentCard = () => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader
        avatar={<Avatar sx={{ backgroundColor: "#56AFDE" }}>RE</Avatar>}
        title="Rodrigo Estiven Sulca Acosta"
        subheader="student"
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary">
          Occaecat dolor excepteur Lorem consectetur sit commodo Lorem sint
          nulla in. Nisi voluptate sit eu amet sunt aliqua elit fugiat enim.
          Cillum duis ea ex cillum adipisicing. Magna magna esse ex quis. Est
          ipsum cupidatat do nulla. Ut ad dolore duis dolore irure proident
          aliqua minim deserunt velit ex consectetur laborum.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
