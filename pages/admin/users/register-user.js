import Head from "next/head";
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
import axios from "axios";
import { getSession } from "next-auth/react";
import { useUsers } from "../../../context/userContext";
import Swal from "sweetalert2";
const rolls = [
  {
    value: 1,
    label: "Student",
  },
  {
    value: 2,
    label: "Teacher",
  },
  {
    value: 3,
    label: "Admin",
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
  const { user } = useUsers();
  const router = useRouter();
  const [rol, setRol] = useState(1);
  const [type, setType] = useState("civil");

  const handleChangeRol = (event) => {
    setRol(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const createUser = async (newUser) => {
    await axios
      .post(
        "https://mwb03srtpc.execute-api.sa-east-1.amazonaws.com/api/user",
        newUser
      )
      .then((res) => {
        if (res) {
          Swal.fire({
            icon: "success",
            title: "User has been created",
            showConfirmButton: true,
          }).then((response) => {
            if (response.isConfirmed) {
              router.push("/admin/users");
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

  const updateUser = async (id, newUserData) => {
    await axios
      .put(
        `https://mwb03srtpc.execute-api.sa-east-1.amazonaws.com/api/user/${id}`,
        newUserData
      )
      .then((res) => {
        if (res) {
          if (res) {
            Swal.fire({
              icon: "success",
              title: "User has been updated",
              showConfirmButton: true,
            }).then((response) => {
              if (response.isConfirmed) {
                router.push("/admin/users");
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
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required")
      .nullable(),
    firstName: Yup.string()
      .max(255)
      .required("First name is required")
      .nullable(),
    lastName: Yup.string()
      .max(255)
      .required("Last name is required")
      .nullable(),
    secondLastName: Yup.string()
      .max(255)
      .required("Second last name is required")
      .nullable(),
    // password: Yup.string().max(255).required("Password name is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: user.email,
      firstName: user.nombre,
      lastName: user.apellidoPaterno,
      secondLastName: user.apellidoMaterno,
      // password: "",
    },
    onSubmit: (values) => {
      const newData = {
        nombre: values.firstName,
        apellidoPaterno: values.lastName,
        apellidoMaterno: values.secondLastName,
        tipo: type,
        usuario: {
          email: values.email,
          rolId: rol,
        },
      };
      const userId = router.query.id;
      if (!userId) {
        createUser(newData);
      } else {
        updateUser(userId, newData);
      }
    },
    validationSchema: validationSchema,
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
                {router.query.id ? "Edit user" : "Register user"}
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Email will be used as username
              </Typography>
            </Box>
            <TextField
              error={Boolean(
                formik.touched.firstName && formik.errors.firstName
              )}
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
              label="Father's last Name"
              margin="normal"
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              variant="outlined"
            />
            <TextField
              error={Boolean(
                formik.touched.secondLastName && formik.errors.secondLastName
              )}
              fullWidth
              helperText={
                formik.touched.secondLastName && formik.errors.secondLastName
              }
              label="Mother's last Name"
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
            {/* <TextField
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
            /> */}
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  id="select-rol"
                  margin="normal"
                  select
                  label="Rol"
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
                  label="Type"
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
                {router.query.id ? "Update user" : "Create user"}
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
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
    if (session.rolId !== 3) {
      return {
        redirect: {
          destination: "/teacher",
          permanent: false,
        },
      };
    }
  }

  return {
    props: {},
  };
};
export default RegisterUser;
