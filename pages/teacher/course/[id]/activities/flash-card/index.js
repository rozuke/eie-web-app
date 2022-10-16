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

const NewFlashCard = () => {
  const router = useRouter();
  const { activity } = useCourse();
  const createFlashCard = async (courseId, forumData) => {
    TeacherService.postNewFlashCard(courseId, forumData)
      .then((res) => {
        if (res) {
          Swal.fire({
            icon: "success",
            title: "Flash card has been created",
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

  const updateFlashCard = async (courseId, forumId, forumData) => {
    TeacherService.putNewFlashCard(courseId, forumId, forumData)
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
    name: Yup.string().max(255).required("Word is required").nullable(),
    definition: Yup.string()
      .max(255)
      .required("Definition is required")
      .nullable(),
    writeExample: Yup.string()
      .max(255)
      .required("Write example is required")
      .nullable(),
    listenExample: Yup.string()
      .max(255)
      .required("Listen example is required")
      .nullable(),
    image: Yup.string().max(255).required("Image url is required").nullable(),
  });
  const formik = useFormik({
    initialValues: {
      name: activity !== null ? activity.nombre : "",
      definition: activity !== null ? activity.definicion : "",
      writeExample: activity !== null ? activity.ejemploEscrito : "",
      listenExample: activity !== null ? activity.ejemploAudio : "",
      image: activity !== null ? activity.imagen : "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const flashCardData = {
        nombre: values.name,
        definicion: values.definition,
        ejemploEscrito: values.writeExample,
        ejemploAudio: values.listenExample,
        imagen: values.image,
      };
      const flashCardId = router.query.flashCardId;
      const courseId = router.query.id;
      if (!flashCardId) {
        createFlashCard(courseId, flashCardData);
      } else {
        updateFlashCard(courseId, flashCardId, flashCardData);
      }
    },
  });
  return (
    <Layout>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} m={3}>
          <Grid item xs={12}>
            <Typography variant="h6">
              {router.query.forumId ? "Edit Flash Card" : "New Flash Card"}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              error={Boolean(formik.touched.name && formik.errors.name)}
              fullWidth
              helperText={formik.touched.name && formik.errors.name}
              label="Word"
              margin="normal"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={8}>
            <TextField
              error={Boolean(
                formik.touched.definition && formik.errors.definition
              )}
              fullWidth
              helperText={formik.touched.definition && formik.errors.definition}
              label="Definition"
              margin="normal"
              name="definition"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.definition}
              variant="outlined"
              multiline
            />
          </Grid>

          <Grid item xs={12} sm={8}>
            <TextField
              error={Boolean(
                formik.touched.writeExample && formik.errors.writeExample
              )}
              fullWidth
              helperText={
                formik.touched.writeExample && formik.errors.writeExample
              }
              label="Writing example"
              margin="normal"
              name="writeExample"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.writeExample}
              variant="outlined"
              multiline
            />
          </Grid>

          <Grid item xs={12} sm={8}>
            <TextField
              error={Boolean(
                formik.touched.listenExample && formik.errors.listenExample
              )}
              fullWidth
              helperText={
                formik.touched.listenExample && formik.errors.listenExample
              }
              label="Listen example"
              margin="normal"
              name="listenExample"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.listenExample}
              variant="outlined"
              multiline
            />
          </Grid>

          <Grid item xs={12} sm={8}>
            <TextField
              error={Boolean(formik.touched.image && formik.errors.image)}
              fullWidth
              helperText={formik.touched.image && formik.errors.image}
              label="Image URL"
              margin="normal"
              name="image"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.image}
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
  }
  if (session) {
    if (session.rolId !== 2) {
      return {
        redirect: {
          destination: "/admin",
          permanent: false,
        },
      };
    }
  }
  return {
    props: {},
  };
};
export default NewFlashCard;
