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

const books = [
  {
    value: "1",
    label: "Book 1",
  },
  {
    value: "2",
    label: "Book 2",
  },
  {
    value: "3",
    label: "Book 3",
  },
  {
    value: "4",
    label: "Book 4",
  },
  {
    value: "5",
    label: "Book 5",
  },
];

const RegisterCourse = () => {
  const router = useRouter();
  const [book, setBook] = useState("Book 1");

  const handleChangeBook = (event) => {
    setBook(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      courseName: "",
      book: "",
    },
    validationSchema: Yup.object({
      courseName: Yup.string().max(255).required("Course name is required"),
    }),
    onSubmit: () => {
      router.push("/");
    },
  });

  return (
    <>
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
          <NextLink href="/" passHref>
            <Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
              Back
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Create a new course
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                You will have to edit the course once the book is finished.
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.courseName && formik.errors.courseName)}
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
                Create user account
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default RegisterCourse;
