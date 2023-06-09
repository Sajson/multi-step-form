import Button from "../../common/layout/Button/Button.tsx";
import Headline from "../../common/layout/Headline/Headline.tsx";
import Wrapper from "../../common/layout/Wrapper/Wrapper.tsx";
import infoStyles from "./personalInfo.module.css";
import React from "react";
import { AppDispatch } from "../../../store/store.ts";
import { useDispatch } from "react-redux";
import { FormInput } from "../FormInput/FormInput.tsx";
import { setUserData } from "../../../store/appSlice.ts";
import FormType from "../../../types/FormType.ts";
import useValidator from "../../../hooks/useValidator.ts";

interface Props {
  handleNextStep: () => void;
  formData: FormType;
}

const PersonalInfo = ({ handleNextStep, formData }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const { validName, validEmail, validNumber } = useValidator(formData);
  const isFormValid = validName && validEmail && validNumber;
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setUserData({
        name: e.currentTarget.value,
        email: formData.email,
        number: formData.number,
      })
    );
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setUserData({
        name: formData.name,
        email: e.currentTarget.value,
        number: formData.number,
      })
    );
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setUserData({
        name: formData.name,
        email: formData.email,
        number: e.currentTarget.value,
      })
    );
  };

  return (
    <Wrapper>
      <Headline
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />
      {/* FORM */}
      <FormInput
        name="name"
        labelText="Name"
        placeholder="e.g Stephen King"
        valid={validName}
        errorText="Please provide properly name!"
        value={formData.name}
        onChange={handleNameChange}
        autoFocus={true}
      />
      <FormInput
        name="email"
        labelText="Email Address"
        placeholder="e.g stephenking@lorem.com"
        valid={validEmail}
        errorText="Please provide properly email address!"
        value={formData.email}
        onChange={handleEmailChange}
      />
      <FormInput
        name="number"
        labelText="Phone Number"
        placeholder="e.g +1234567890"
        valid={validNumber}
        errorText="Please provide properly phone number!"
        value={formData.number}
        onChange={handleNumberChange}
      />
      {/* NAVIGATION */}
      <div className={infoStyles.navWrapper}>
        <Button
          text="Next Step"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          alignSelf="end"
          click={handleNextStep}
          disabled={!isFormValid}
        />
      </div>
    </Wrapper>
  );
};

export default PersonalInfo;
