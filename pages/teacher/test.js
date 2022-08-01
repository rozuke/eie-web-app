import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Test = () => {
  return (
    <Box>
      <Typography variant="h4" component="div">
        Peta Gay
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          const response = confirm("Deseas abrir Visual Estudio Code");
          if (response) {
            var objShell = new ActiveXObject("WScript.Shell").RUN("code");
            return objShell;
          }
        }}
      >
        Abrir vscode
      </Button>
    </Box>
  );
};

export default Test;
