import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Grid,
  Link,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { getSession } from "next-auth/react";
import axios from "axios";
import Swal from "sweetalert2";
import { CourseProvider, useCourse } from "../../../context/courseContext";
const books = [
  {
    value: 1,
    label: "Book 1",
  },
  {
    value: 2,
    label: "Book 2",
  },
  {
    value: 3,
    label: "Book 3",
  },
  {
    value: 4,
    label: "Book 4",
  },
  {
    value: 5,
    label: "Book 5",
  },
  {
    value: 6,
    label: "Book 6",
  },
];

const RegisterCourse = () => {
  const { course } = useCourse();
  const router = useRouter();
  const [book, setBook] = useState(1);

  const handleChangeBook = (event) => {
    setBook(event.target.value);
  };

  const createCouse = async (courseData) => {
    await axios
      .post(
        "https://qnnijeqn9g.execute-api.sa-east-1.amazonaws.com/api/course",
        courseData
      )
      .then((res) => {
        if (res) {
          Swal.fire({
            icon: "success",
            title: "Course has been created",
            showConfirmButton: true,
          }).then((response) => {
            if (response.isConfirmed) {
              router.push("/admin/courses");
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

  const updateCourse = async (id, newCourseData) => {
    await axios
      .put(
        `https://qnnijeqn9g.execute-api.sa-east-1.amazonaws.com/api/course/${id}`,
        newCourseData
      )
      .then((res) => {
        if (res) {
          if (res) {
            Swal.fire({
              icon: "success",
              title: "Course has been updated",
              showConfirmButton: true,
            }).then((response) => {
              if (response.isConfirmed) {
                router.push("/admin/courses");
              }
            });
          }
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
  const validationSchema = Yup.object().shape({
    courseName: Yup.string()
      .max(255)
      .required("Course name is required")
      .nullable(),
  });
  const formik = useFormik({
    initialValues: {
      courseName: course.nombre,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const dataCourse = {
        nombre: values.courseName,
        libroId: book,
      };
      const courseId = router.query.id;
      if (!courseId) {
        createCouse(dataCourse);
      } else {
        updateCourse(courseId, dataCourse);
      }
    },
  });

  return (
    <CourseProvider>
      <Head>
        <title>Register course | EIE</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Button
            component="a"
            startIcon={<ArrowBackIcon fontSize="small" />}
            onClick={() => router.back()}
          >
            Back
          </Button>

          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                {router.query.id ? "Edit course" : "Register course"}
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                You will have to edit the course once the book is finished.
              </Typography>
            </Box>
            <TextField
              error={Boolean(
                formik.touched.courseName && formik.errors.courseName
              )}
              fullWidth
              helperText={formik.touched.courseName && formik.errors.courseName}
              label="Course Name"
              margin="normal"
              name="courseName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.courseName}
              variant="outlined"
            />
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  id="select-book"
                  margin="normal"
                  select
                  label="Book"
                  value={book}
                  onChange={handleChangeBook}
                  helperText="Please select a book"
                >
                  {books.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                {router.query.id ? "Update course" : "Create course"}
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </CourseProvider>
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
    // if (session.rolId !== 3) {
    //   return {
    //     redirect: {
    //       destination: "/teacher",
    //       permanent: false,
    //     },
    //   };
    // }
  }

  return {
    props: {},
  };
};
export default RegisterCourse;
