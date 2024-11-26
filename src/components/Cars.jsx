/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { deleteData } from "../redux/dataSlice";


// eslint-disable-next-line react/prop-types
const Cars = ({ data }) => {
  const dispatch = useDispatch();

  const handleUpdate = (event) => {
    console.log(event.id);
  };

  const handleDelete = (event) => {
    dispatch(deleteData(event.id));
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        columns={{ sm: 6, xs: 4 }}
        justifyContent={"center"}
      >
        {data &&
          data.map((item, index) => {
            return (
              <Grid key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                    width: { xs: "260px", md: "200px" },
                  }}
                >
                  <img
                    src={item.img}
                    alt="There is no image"
                    style={{
                      width: "auto",
                      height: "140px",
                      objectFit: "cover",
                    }}
                  />
                  <Box component="ul">
                    <Typography variant="body1" color="initial" component="li">
                      Type: {item.name}
                    </Typography>
                    <Typography variant="body1" color="initial" component="li">
                      Hourly Price: {item.hourlyPrice}
                    </Typography>
                    <Typography variant="body1" color="initial" component="li">
                      Licence Number: {item.licenceNumber}
                    </Typography>
                  </Box>
                  <Stack
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    marginY="8px"
                  >
                    <Button
                      variant="contained"
                      onClick={(e) => handleUpdate(e.target)}
                      id={item._id}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      onClick={(e) => handleDelete(e.target)}
                      id={item._id}
                    >
                      Delete
                    </Button>
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default Cars;
