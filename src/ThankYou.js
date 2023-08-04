import './App.css';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import moment from "moment";

function ThankYou({ userInfoValue, addressValue }) {

  //Destructured the userInfoValue props
  const {
    firstName,
    middleName,
    lastName,
    mobileNo,
    email,
    birthDay,
    age,
    bloodGroup,
    height,
    weight,
    gender,
    maritalStatus,
  } = userInfoValue;

  //Destructured the addressValue props
  const {
    addressLineOne,
    addressLineTwo,
    city,
    stateOfCountry,
    country,
    pincode,
  } = addressValue;

  //Defined dataName object to use it to show its key and value pairs in a Table format.
  const dataName = {
    Name: "Value",
    FirstName: firstName,
    MiddleName: middleName,
    LastName: lastName,
    MobileNo: mobileNo,
    Email: email,
    BirthDay: moment(birthDay).format("DD/MM/YYYY"),
    Age: age,
    BloodGroup: bloodGroup,
    Height: height,
    Weight: weight,
    Gender: gender,
    MaritalStatus: maritalStatus,
    AddressLineOne: addressLineOne,
    AddressLineTwo: addressLineTwo,
    City: city,
    StateOfCountry: stateOfCountry,
    Country: country,
    Pincode: pincode,
  };

  return (
    <>
      <Box>
        <Typography variant="h4" className='tyTitleName'>
          Data added successfully
        </Typography>
      </Box>
      <Box>
        <Table>
          <TableBody>
            {Object.entries(dataName).map(([key, value]) => {
              return (
                <TableRow key={key}>
                  <TableCell variant="head">{key}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </>
  );
}

export default ThankYou;
