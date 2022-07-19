import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const ForoForm = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        New Forum Topic{" "}
      </Typography>
      <form>
        <Grid container spacing={3} m={3}>
          <Grid item xs={12} sm={8}>
            <TextField
              required
              id="topic"
              name="topic"
              label="New Topic"
              fullWidth
              autoComplete="write new topic"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={8} mt={2}>
            <TextField
              required
              id="description"
              name="destription"
              label="Desription"
              fullWidth
              autoComplete="write a description for the topic"
              variant="standard"
              multiline
            />
          </Grid>
          <Grid item sm={8} align={"right"} mt={3}>
            <Button variant="contained" color="primary" type="submit">
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ForoForm;
