import './App.css';
import UserInfo from "./UserInfo";
import AddressDetails from "./AddressDetails";
import ThankYou from "./ThankYou";
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import { useState } from "react";

function App() {

  //****User Information State Starts Here****//

  //Defined UserInfo State
  const [userInfoState, setUserInfoState] = useState({
    stepNo: 0,
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    birthDay: "",
    age: "",
    bloodGroup: "",
    height: "",
    weight: "",
    gender: "",
    maritalStatus: "",
  });

  //Destructure the userInfoState
  const {
    stepNo,
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
  } = userInfoState;

  //stored the destructured userInfoState in userInfoValue
  const userInfoValue = {
    stepNo,
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
  };

  //Defined userInfoErrorState for validation purpose
  const [userInfoErrorState, setUserInfoErrorState] = useState({
    firstNameError: false,
    middleNameError: false,
    lastNameError: false,
    mobileNoError: false,
    emailError: false,
    birthDayError: false,
    ageError: false,
    bloodGroupError: false,
    heightError: false,
    weightError: false,
    genderError: false,
    maritalStatusError: false,
  });

  //Destructure the userInfoErrorState
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
  } = userInfoErrorState;

  //stored the destructured userInfoErrorState in userInfoError
  const userInfoError = {
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
  };

  //Defined pageNext function to jump onto the next step of the process
  const pageNext = () => {
    setUserInfoState((prevValues) => {
      return {
        ...prevValues,
        stepNo: stepNo + 1,
      };
    });
  };

  //Defined pageNext function to jump back the previous step of the process
  const pagePrev = () => {
    setUserInfoState((prevValues) => {
      return {
        ...prevValues,
        stepNo: stepNo - 1,
      };
    });
  };

  //Defined onChangeUserInfo function to change the state of userInfoState as per value put by any User. Also set the userInfoErrorState's particular property to false to remove the error-message* when the user tries to input the data in the empty form field after the validation process.
  //error-message* = Appears when the user has not filled any of the form fields
  const onChangeUserInfo = (e, name, error) => {
    const { value } = e.target;
    setUserInfoState({ ...userInfoState, [name]: value });
    setUserInfoErrorState({ ...userInfoErrorState, [error]: false });
  };

  //Defined handleUserInfoSubmit function, which first checks the validation and throws an error message if user has not filled any of the form fields. And if User fills all the form fields properly then it jumps onto the second step. 
  const handleUserInfoSubmit = (e) => {
    e.preventDefault();
    if (firstName === "") {
      setUserInfoErrorState((prevValues) => {
        return { ...prevValues, firstNameError: true };
      });
    }
    if (middleName === "") {
      setUserInfoErrorState((prevValues) => {
        return { ...prevValues, middleNameError: true };
      });
    }
    if (lastName === "") {
      setUserInfoErrorState((prevValues) => {
        return { ...prevValues, lastNameError: true };
      });
    }
    if (mobileNo === "") {
      setUserInfoErrorState((prevValues) => {
        return { ...prevValues, mobileNoError: true };
      });
    }
    if (email === "") {
      setUserInfoErrorState((prevValues) => {
        return { ...prevValues, emailError: true };
      });
    }
    if (birthDay === "") {
      setUserInfoErrorState((prevValues) => {
        return { ...prevValues, birthDayError: true };
      });
    }
    if (age === "") {
      setUserInfoErrorState((prevValues) => {
        return { ...prevValues, ageError: true };
      });
    }
    if (bloodGroup === "") {
      setUserInfoErrorState((prevValues) => {
        return { ...prevValues, bloodGroupError: true };
      });
    }
    if (height === "") {
      setUserInfoErrorState((prevValues) => {
        return { ...prevValues, heightError: true };
      });
    }
    if (weight === "") {
      setUserInfoErrorState((prevValues) => {
        return { ...prevValues, weightError: true };
      });
    }
    if (gender === "") {
      setUserInfoErrorState((prevValues) => {
        return { ...prevValues, genderError: true };
      });
    }
    if (maritalStatus === "") {
      setUserInfoErrorState((prevValues) => {
        return { ...prevValues, maritalStatusError: true };
      });
    }
    if (
      firstName &&
      middleName &&
      lastName &&
      mobileNo &&
      email &&
      birthDay &&
      age &&
      bloodGroup &&
      height &&
      weight &&
      gender &&
      maritalStatus
    ) {
      pageNext();
    }
  };

  //****User Information State Ends Here****//


  //****Address section State Starts Here****//

  //Defined addressState
  const [addressState, setAddressState] = useState({
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    stateOfCountry: "",
    country: "",
    pincode: "",
  });

  //Destructure the addressState
  const {
    addressLineOne,
    addressLineTwo,
    city,
    stateOfCountry,
    country,
    pincode,
  } = addressState;

  //stored the destructured addressState in addressValue
  const addressValue = {
    addressLineOne,
    addressLineTwo,
    city,
    stateOfCountry,
    country,
    pincode,
  };

  //Defined addressErrorState for validation purpose
  const [addressErrorState, setAddressErrorState] = useState({
    addressLineOneError: false,
    addressLineTwoError: false,
    cityError: false,
    stateOfCountryError: false,
    countryError: false,
    pincodeError: false,
  });

  //Destructure the addressErrorState
  const {
    addressLineOneError,
    addressLineTwoError,
    cityError,
    stateOfCountryError,
    countryError,
    pincodeError,
  } = addressErrorState;

  //stored the destructured addressErrorState in addressError
  const addressError = {
    addressLineOneError,
    addressLineTwoError,
    cityError,
    stateOfCountryError,
    countryError,
    pincodeError,
  };

  //Defined onChangeAddress function to change the state of addressState as per value put by any User. Also set the addressErrorState's particular property to false to remove the error-message* when the user tries to input the data in the empty form field after the validation process.
  //error-message* = Appears when the user has not filled any of the form fields
  const onChangeAddress = (e, address, error) => {
    const { value } = e.target;
    setAddressState({ ...addressState, [address]: value });
    setAddressErrorState({ ...addressErrorState, [error]: false });
  };

  //Defined handleAddressSubmit function, which first checks the validation and throws an error message if user has not filled any of the form fields. And if User fills all the form fields properly then it jumps onto the third step. 
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (addressLineOne === "") {
      setAddressErrorState((prevValues) => {
        return { ...prevValues, addressLineOneError: true };
      });
    }

    if (addressLineTwo === "") {
      setAddressErrorState((prevValues) => {
        return { ...prevValues, addressLineTwoError: true };
      });
    }
    if (city === "") {
      setAddressErrorState((prevValues) => {
        return { ...prevValues, cityError: true };
      });
    }
    if (stateOfCountry === "") {
      setAddressErrorState((prevValues) => {
        return { ...prevValues, stateOfCountryError: true };
      });
    }
    if (country === "") {
      setAddressErrorState((prevValues) => {
        return { ...prevValues, countryError: true };
      });
    }
    if (pincode === "") {
      setAddressErrorState((prevValues) => {
        return { ...prevValues, pincodeError: true };
      });
    }

    if (
      addressLineOne &&
      addressLineTwo &&
      city &&
      stateOfCountry &&
      country &&
      pincode
    ) {
      pageNext();
    }
  };

  //Defined handlePrevButton function if User wants to go back to first step for data manipulation.  
  const handlePrevButton = (e) => {
    e.preventDefault();
    pagePrev();
  };

   //****Address section State Ends Here****//

  //Defined stepNames
  const stepNames = ["USER INFORMATION", "ADDRESS DETAILS", "THANK YOU"];

  switch (stepNo) {
    case 0:
      return (
        <Box className='formContainerDiv'>
          <Box
            component="form"
            className='formMainDiv'
          >
            <Box className='formChildDiv'>
              <Box className="formNestedChildDiv">
                <Stepper activeStep={stepNo} alternativeLabel>
                  {stepNames.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Box>
            <UserInfo
              userInfoValue={userInfoValue}
              userInfoError={userInfoError}
              onChangeUserInfo={onChangeUserInfo}
              handleUserInfoSubmit={handleUserInfoSubmit}
            />
          </Box>
        </Box>
      );
    case 1:
      return (
        <Box className='formContainerDiv'>
          <Box
            component="form"
            className='formMainDiv'
          >
            <Box className='formChildDiv'>
              <Box className="formNestedChildDiv">
                <Stepper activeStep={stepNo} alternativeLabel>
                  {stepNames.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Box>
            <AddressDetails
              addressValue={addressValue}
              addressError={addressError}
              onChangeAddress={onChangeAddress}
              handleAddressSubmit={handleAddressSubmit}
              handlePrevButton={handlePrevButton}
            />
          </Box>
        </Box>
      );
    case 2:
      return (
        <Box className='formContainerDiv'>
          <Box
            component="form"
            className='formMainDiv'
          >
            <Box className='formChildDiv'>
              <Box className="formNestedChildDiv">
                <Stepper activeStep={stepNo} alternativeLabel>
                  {stepNames.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Box>
            <ThankYou
              userInfoValue={userInfoValue}
              addressValue={addressValue}
            />
          </Box>
        </Box>
      );
      default:
        return("Default case")
  }
}

export default App;
