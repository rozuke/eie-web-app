import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import eieLogo from "../public/image/eie-logo.png";
import GoogleIcon from "@mui/icons-material/Google";
import { getSession, signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://www.escueladeidiomasejto.com/">
        EIE
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Index = ({ session }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(login.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image src={eieLogo} width={80} height={80} />
          <Typography component="div" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> */}
            <Box height={100} />
            <Button
              type="submit"
              fullWidth
              startIcon={<GoogleIcon />}
              variant="contained"
              sx={{ mt: 3, mb: 2, padding: "10px 80px" }}
              onClick={() => signIn("google")}
            >
              Sign In with Google
            </Button>

            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session !== null) {
    const indexRoute = session.rolId === 2 ? "/teacher" : "/admin";

    return {
      redirect: {
        destination: indexRoute,
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

export default Index;
