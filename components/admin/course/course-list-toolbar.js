import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useCourse } from "../../../context/courseContext";

export const CourseListToolbar = () => {
  const { course } = useCourse();
  const router = useRouter();
  return (
    <Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          {router.query.id ? course.nombre : "Courses"}
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => router.push("/admin/courses/register-course")}
          >
            {router.query.id ? "Add user" : "Add course"}
            {console.log(course)}
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              {/* <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              placeholder="Search product"
              variant="outlined"
            /> */}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
