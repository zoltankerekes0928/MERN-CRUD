/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/dataSlice";
import Cars from "../components/Cars";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);


  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      {data.length === 0 ? (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              py: "4rem",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              color="#FFFF"
              marginBottom="2rem"
            >
              There is no data, please add first taxi.
            </Typography>
            <Typography
              sx={{
                color: "rgb(154, 164, 181)",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
                fontSize: "1.5rem",
              }}
              component={Link}
              to={`/Taxis`}
            >
              Click here to add Data
            </Typography>
          </Box>
        </>
      ) : (
        <>
          <Box py={data.length !== 0 && "4rem"}>
            <Cars data={data} />
          </Box>

          <Box>
            <Typography variant="body1" conatiner="p" color="#FFFF" py={"4rem"}>
              Morbi eu vehicula ligula. Duis non cursus ipsum. Donec aliquam
              nunc vitae lectus imperdiet consectetur. Duis placerat fringilla
              egestas. In diam tellus, ultrices sit amet sem vitae, fringilla
              maximus augue. Aliquam ullamcorper sem leo, eget facilisis erat
              viverra sed. Aenean purus turpis, mattis in cursus vitae,
              dignissim non libero.
            </Typography>
          </Box>
        </>
      )}
    </>
  );
};

export default HomePage;
