import {
  Grid,
  Button,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  TextField,
  Radio,
  FormHelperText,
  Box,
} from "@mui/material";
import React from "react";

function UserInfo({
  userInfoValue,
  handleUserInfoSubmit,
  onChangeUserInfo,
  userInfoError,
}) {

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

  //Destrutured the userInfoError props
  const {
    firstNameError,
    middleNameError,
    lastNameError,
    mobileNoError,
    emailError,
    birthDayError,
    ageError,
    bloodGroupError,
    heightError,
    weightError,
    genderError,
    maritalStatusError,
  } = userInfoError;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            type="text"
            variant="outlined"
            onChange={(e) => onChangeUserInfo(e, "firstName", "firstNameError")}
            fullWidth
            size="small"
            error={firstNameError}
            helperText={firstNameError ? "Require First Name" : ""}
            placeholder="First name"
            value={firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            type="text"
            variant="outlined"
            onChange={(e) =>
              onChangeUserInfo(e, "middleName", "middleNameError")
            }
            fullWidth
            size="small"
            error={middleNameError}
            helperText={middleNameError ? "Require Middle Name" : ""}
            placeholder="Middle Name"
            value={middleName}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            type="text"
            variant="outlined"
            onChange={(e) => onChangeUserInfo(e, "lastName", "lastNameError")}
            fullWidth
            size="small"
            error={lastNameError}
            helperText={lastNameError ? "Require Last Name" : ""}
            placeholder="Last Name"
            value={lastName}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            type="text"
            variant="outlined"
            onChange={(e) => onChangeUserInfo(e, "mobileNo", "mobileNoError")}
            fullWidth
            size="small"
            error={mobileNoError}
            helperText={mobileNoError ? "Require Mobile No" : ""}
            placeholder="Mobile No"
            value={mobileNo}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            type="email"
            variant="outlined"
            onChange={(e) => onChangeUserInfo(e, "email", "emailError")}
            fullWidth
            size="small"
            error={emailError}
            helperText={emailError ? "Require Email" : ""}
            placeholder="Email"
            value={email}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            type="date"
            variant="outlined"
            onChange={(e) => onChangeUserInfo(e, "birthDay", "birthDayError")}
            fullWidth
            size="small"
            error={birthDayError}
            helperText={birthDayError ? "Require Birthday" : ""}
            placeholder="Birthday"
            value={birthDay}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            type="text"
            variant="outlined"
            onChange={(e) => onChangeUserInfo(e, "age", "ageError")}
            fullWidth
            size="small"
            error={ageError}
            helperText={ageError ? "Require Age" : ""}
            placeholder="Age"
            value={age}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            type="text"
            variant="outlined"
            onChange={(e) =>
              onChangeUserInfo(e, "bloodGroup", "bloodGroupError")
            }
            fullWidth
            size="small"
            error={bloodGroupError}
            helperText={bloodGroupError ? "Require Blood Group" : ""}
            placeholder="Blood Group"
            value={bloodGroup}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            type="text"
            variant="outlined"
            onChange={(e) => onChangeUserInfo(e, "height", "heightError")}
            fullWidth
            size="small"
            error={heightError}
            helperText={heightError ? "Require Height" : ""}
            placeholder="Height"
            value={height}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            type="text"
            variant="outlined"
            onChange={(e) => onChangeUserInfo(e, "weight", "weightError")}
            fullWidth
            size="small"
            error={weightError}
            helperText={weightError ? "Require Weight" : ""}
            placeholder="Weight"
            value={weight}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <FormLabel error={genderError} required>
            Gender
          </FormLabel>
          <RadioGroup
            row
            name="radioButton"
            onChange={(e) => onChangeUserInfo(e, "gender", "genderError")}
            value={gender}
          >
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
          </RadioGroup>
          <FormHelperText error={genderError}>
            {genderError ? "Require Gender" : ""}
          </FormHelperText>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <FormLabel error={maritalStatusError} required>
            Marital Status
          </FormLabel>
          <RadioGroup
            row
            name="radioButton"
            onChange={(e) =>
              onChangeUserInfo(e, "maritalStatus", "maritalStatusError")
            }
            value={maritalStatus}
          >
            <FormControlLabel
              value="Single"
              control={<Radio />}
              label="Single"
            />
            <FormControlLabel
              value="Married"
              control={<Radio />}
              label="Married"
            />
            <FormControlLabel
              value="Divorced"
              control={<Radio />}
              label="Divorced"
            />
            <FormControlLabel
              value="Widowed"
              control={<Radio />}
              label="Widowed"
            />
          </RadioGroup>
          <FormHelperText error={maritalStatusError}>
            {maritalStatusError ? "Require Marital Status" : ""}
          </FormHelperText>
        </Grid>
      </Grid>

      <Box display="flex">
        <Box margin="10px 10px 0 0">
          <Button variant="contained" disabled>
            BACK
          </Button>
        </Box>
        <Box margin="10px 0 0 0">
          <Button variant="contained" onClick={handleUserInfoSubmit}>
            NEXT
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default UserInfo;
