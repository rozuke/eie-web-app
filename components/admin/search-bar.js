import { AlternateEmail } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import AdminService from "../../service/adminService";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const SearchBar = (props) => {
  const router = useRouter();
  const addUserToCourse = (userData) => {
    AdminService.addUserToCourse(userData)
      .then((res) => {
        if (res) {
          Swal.fire({
            title: res.mensaje,
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
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required")
      .nullable(),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      // password: "",
    },
    onSubmit: (values) => {
      const courseId = router.query.id;
      const email = values.email;
      const userData = {
        cursoId: courseId,
        email: email,
      };
      addUserToCourse(userData);
    },
    validationSchema: validationSchema,
  });

  return (
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          {/* <fom onSubmit={formik.handleSubmit}> */}
          <Box
            sx={{ display: "flex" }}
            component="form"
            onSubmit={formik.handleSubmit}
          >
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="email"
              placeholder="Put email user"
              sx={{ maxWidth: 500 }}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmail />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <Button
              color="primary"
              variant="contained"
              sx={{ marginLeft: "30px" }}
              type="submit"
            >
              Add user
            </Button>
          </Box>
          {/* </fom> */}
        </CardContent>
      </Card>
    </Box>
  );
};

export default SearchBar;
