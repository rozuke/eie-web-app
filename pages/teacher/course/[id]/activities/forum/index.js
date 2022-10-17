import { Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../../../../components/teacher/Layout";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import TeacherService from "../../../../../../service/teacherService";
import { useCourse } from "../../../../../../context/courseContext";
import { getSession } from "next-auth/react";
const NewForo = () => {
  const router = useRouter();
  const { activity } = useCourse();
  const createForum = async (courseId, forumData) => {
    TeacherService.postNewForum(courseId, forumData)
      .then((res) => {
        if (res) {
          Swal.fire({
            icon: "success",
            title: "Forum has been created",
            showConfirmButton: true,
          }).then((response) => {
            if (response.isConfirmed) {
              router.reload(window.location.pathname);
            }
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  const updateForum = async (courseId, forumId, forumData) => {
    TeacherService.putNewForum(courseId, forumId, forumData)
      .then((res) => {
        if (res) {
          Swal.fire({
            icon: "success",
            title: "Forum has been updated",
            showConfirmButton: true,
          }).then((response) => {
            if (response.isConfirmed) {
              const path = `/teacher/course/${courseId}/review`;
              router.push(path);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  const validationSchema = Yup.object().shape({
    topic: Yup.string().max(255).required("Topic is required").nullable(),
    description: Yup.string()
      .max(255)
      .required("Description is required")
      .nullable(),
  });
  const formik = useFormik({
    initialValues: {
      topic: activity.nombre,
      description: activity.descripcion,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const dataForum = {
        nombre: values.topic,
        descripcion: values.description,
      };
      const forumId = router.query.forumId;
      const courseId = router.query.id;
      if (!forumId) {
        createForum(courseId, dataForum);
      } else {
        updateForum(courseId, forumId, dataForum);
      }
    },
  });
  return (
    <Layout>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} m={3}>
          <Grid item xs={12}>
            <Typography variant="h6">
              {router.query.forumId ? "Edit Forum" : "New Forum"}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              error={Boolean(formik.touched.topic && formik.errors.topic)}
              fullWidth
              helperText={formik.touched.topic && formik.errors.topic}
              label="Topic"
              margin="normal"
              name="topic"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.topic}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={8}>
            <TextField
              error={Boolean(
                formik.touched.description && formik.errors.description
              )}
              fullWidth
              helperText={
                formik.touched.description && formik.errors.description
              }
              label="Description"
              margin="normal"
              name="description"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.description}
              variant="outlined"
              multiline
            />
          </Grid>
          <Grid item sm={8} align={"right"} mt={3}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={formik.isSubmitting}
              size="large"
              sx={{ padding: "10px 30px" }}
            >
              {router.query.forumId ? "Update" : "Create"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
};
export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
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
    props: {},
  };
};
export default NewForo;
