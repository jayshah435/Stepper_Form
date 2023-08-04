import './App.css';
import {
  Grid,
  TextField,
  Button,
  Box,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";
import React from "react";

function AddressDetails({
  addressValue,
  addressError,
  onChangeAddress,
  handleAddressSubmit,
  handlePrevButton,
}) {

  //Destructured the addressValue props
  const {
    addressLineOne,
    addressLineTwo,
    city,
    stateOfCountry,
    country,
    pincode,
  } = addressValue;

  //Destructured the addressError props
  const {
    addressLineOneError,
    addressLineTwoError,
    cityError,
    stateOfCountryError,
    countryError,
    pincodeError,
  } = addressError;

  //Defined totalCities to show all the names in the select menubar
  const totalCities = ["Ahmedabad", "Mumbai", "Indore"];
  
  //Defined totalStates to show all the names in the select menubar
  const totalStates = ["Gujarat", "Maharashtra", "Madhya Pradesh"];

  //Defined totalCountries to show all the names in the select menubar
  const totalCountries = ["India", "USA", "Canada"];
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            type="text"
            variant="outlined"
            onChange={(e) =>
              onChangeAddress(e, "addressLineOne", "addressLineOneError")
            }
            fullWidth
            size="small"
            error={addressLineOneError}
            helperText={addressLineOneError ? "Require Address Line One" : ""}
            placeholder="Address Line One"
            value={addressLineOne}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            type="text"
            variant="outlined"
            onChange={(e) =>
              onChangeAddress(e, "addressLineTwo", "addressLineTwoError")
            }
            fullWidth
            size="small"
            error={addressLineTwoError}
            helperText={addressLineTwoError ? "Require Address Line Two" : ""}
            placeholder="Address Line Two"
            value={addressLineTwo}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <FormControl error={cityError} fullWidth size="small">
            <InputLabel>City</InputLabel>
            <Select
              value={city}
              label="City"
              onChange={(e) => onChangeAddress(e, "city", "cityError")}
            >
              {totalCities.map((label) => {
                return (
                  <MenuItem key={label} value={label}>
                    {label}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText error={cityError}>
              {cityError ? "Require City" : ""}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <FormControl error={stateOfCountryError} fullWidth size="small">
            <InputLabel>State</InputLabel>
            <Select
              value={stateOfCountry}
              label="State"
              onChange={(e) =>
                onChangeAddress(e, "stateOfCountry", "stateOfCountryError")
              }
            >
              {totalStates.map((label) => {
                return (
                  <MenuItem key={label} value={label}>
                    {label}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText error={stateOfCountryError}>
              {stateOfCountryError ? "Require State" : ""}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <FormControl error={countryError} fullWidth size="small">
            <InputLabel>Country</InputLabel>
            <Select
              value={country}
              label="Country"
              onChange={(e) => onChangeAddress(e, "country", "countryError")}
            >
              {totalCountries.map((label) => {
                return (
                  <MenuItem key={label} value={label}>
                    {label}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText error={countryError}>
              {countryError ? "Require Country" : ""}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            type="text"
            variant="outlined"
            onChange={(e) => onChangeAddress(e, "pincode", "pincodeError")}
            fullWidth
            size="small"
            error={pincodeError}
            helperText={pincodeError ? "Require Pincode" : ""}
            placeholder="Pincode"
            value={pincode}
          />
        </Grid>
      </Grid>

      <Box className="btnMaindiv">
        <Box className="btnBack">
          <Button variant="contained" onClick={handlePrevButton}>
            BACK
          </Button>
        </Box>
        <Box className="btnNext">
          <Button variant="contained" onClick={handleAddressSubmit}>
            NEXT
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default AddressDetails;
