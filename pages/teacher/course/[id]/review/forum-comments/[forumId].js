import { Grid, Typography } from "@mui/material";
import { getSession } from "next-auth/react";
import React from "react";
import CommentCard from "../../../../../../components/teacher/card/CommentCard";
import Layout from "../../../../../../components/teacher/Layout";
import TeacherService from "../../../../../../service/teacherService";

const Forum = ({ comments }) => {
  return (
    <Layout>
      <Grid container spacing={3} justifyContent={"flex-start"}>
        <Grid item xs={10}>
          <Typography variant="h4" component="div">
            {comments && comments.foro.topico}
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h6" color={"primary"} component="div">
            {comments && comments.foro.descripcion}
          </Typography>
        </Grid>

        {comments &&
          comments.comentarios.map((comentario) => (
            <Grid item xs={12} sm={6} md={4} key={comentario.usuarioId}>
              <CommentCard comentario={comentario} />
            </Grid>
          ))}
      </Grid>
    </Layout>
  );
};
export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const { id, forumId } = ctx.query;

  let comments;

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    comments = await TeacherService.getAllCommentsByForum(id, forumId);
    // if (session.rolId !== 2) {
    //   return {
    //     redirect: {
    //       destination: "/admin",
    //       permanent: false,
    //     },
    //   };
    // }
  }
  return {
    props: {
      comments,
    },
  };
};
export default Forum;
