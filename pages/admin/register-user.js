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

const rolls = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "student",
    label: "Student",
  },
  {
    value: "teacher",
    label: "Teacher",
  },
];

const types = [
  {
    value: "civil",
    label: "Civil",
  },
  {
    value: "military",
    label: "Military",
  },
];

const RegisterUser = () => {
  const router = useRouter();
  const [rol, setRol] = useState("student");
  const [type, setType] = useState("civil");

  const handleChangeRol = (event) => {
    setRol(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      secondLastName: "",
      password: "",
      rol: "",
      type: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      firstName: Yup.string().max(255).required("First name is required"),
      lastName: Yup.string().max(255).required("Last name is required"),
      secondLastName: Yup.string().max(255).required("Second last name is required"),
      password: Yup.string().max(255).required("Password name is required"),
    }),
    onSubmit: () => {
      router.push("/");
    },
  });

  return (
    <>
      <Head>
        <title>Register user | EIE</title>
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
                Create a new user
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Email will be used as username
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="First Name"
              margin="normal"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              helperText={formik.touched.lastName && formik.errors.lastName}
              label="Last Name"
              margin="normal"
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.secondLastName && formik.errors.secondLastName)}
              fullWidth
              helperText={formik.touched.secondLastName && formik.errors.secondLastName}
              label="Second last Name"
              margin="normal"
              name="secondLastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.secondLastName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  id="select-rol"
                  margin="normal"
                  select
                  label="Select"
                  value={rol}
                  onChange={handleChangeRol}
                  helperText="Please select a rol"
                >
                  {rolls.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="select-type"
                  margin="normal"
                  select
                  label="Select"
                  value={type}
                  onChange={handleChangeType}
                  helperText="Please select a type"
                >
                  {types.map((option) => (
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

export default RegisterUser;
