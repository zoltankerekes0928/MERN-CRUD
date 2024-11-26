import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { createData, resetSuccess } from "../redux/dataSlice";

import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const CreatePage = () => {
  const dispatch = useDispatch();

  const { success } = useSelector((state) => state.data);

  const [carName, setCarName] = useState("");
  const [price, setPrice] = useState("");
  const [licence, setLicence] = useState("");
  const [image, setImage] = useState("");

  const handelSubmit = () => {
    const newCar = {
      name: carName,
      hourlyPrice: price,
      licenceNumber: licence,
      img: image,
    };
    dispatch(createData(newCar));
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
        <Button variant="contained" onClick={handelSubmit}>
          Submit
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
