import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { createData, resetSuccess, updateData } from "../redux/dataSlice";

import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import Typography from "@mui/material/Typography";

// eslint-disable-next-line react/prop-types
const CreatePage = () => {
  const dispatch = useDispatch();

  const { success, updatedId, beingUpdated, data } = useSelector(
    (state) => state.data
  );

  const targetTaxi = data.filter((item) => item._id === updatedId);

  const [carName, setCarName] = useState(
    !beingUpdated ? "" : targetTaxi[0].name
  );
  const [price, setPrice] = useState(
    !beingUpdated ? "" : targetTaxi[0].hourlyPrice
  );
  const [licence, setLicence] = useState(
    !beingUpdated ? "" : targetTaxi[0].licenceNumber
  );
  const [image, setImage] = useState(!beingUpdated ? "" : targetTaxi[0].img);
  //console.log(data);

  const handleSubmit = () => {
    const newCar = {
      name: carName,
      hourlyPrice: price,
      licenceNumber: licence,
      img: image,
    };
    dispatch(createData(newCar));
  };

  const handleUpdate = () => {
    const updatedCar = {
      _id:updatedId,
      name: carName,
      hourlyPrice: price,
      licenceNumber: licence,
      img: image,
    };
    dispatch(updateData(updatedCar));
  };

  const handleClose = () => {
    dispatch(resetSuccess());
    setCarName("");
    setPrice("");
    setLicence("");
    setImage("");
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "35ch" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2rem",
          py: "4rem",
          border: "2px solid rgb(66, 89, 128)",
          borderRadius: "10px",
          backgroundColor: "rgb(232, 234, 237)",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="subtitle1" color="info" align="center">
          {!beingUpdated ? "Create new Taxi" : "Update Taxi"}{" "}
        </Typography>
        <FormControl sx={{ gap: "1rem" }}>
          <TextField
            id="modell"
            label="Modell"
            variant="outlined"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
          />
          <TextField
            id="price"
            label="Price"
            variant="outlined"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            id="licence"
            label="Licence Number"
            variant="outlined"
            value={licence}
            onChange={(e) => setLicence(e.target.value)}
          />
          <TextField
            id="image"
            label="Image"
            variant="outlined"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </FormControl>
        <Button
          variant="contained"
          onClick={!beingUpdated ? handleSubmit : handleUpdate}
        >
          {!beingUpdated ? "Submit" : "Update"}
        </Button>
        {success && (
          <Alert
            //variant="filled"
            icon={<CheckIcon fontSize="inherit" />}
            onClose={handleClose}
            severity="success"
          >
            {`${licence} number saved`}
          </Alert>
        )}
      </Box>
    </>
  );
};

export default CreatePage;
