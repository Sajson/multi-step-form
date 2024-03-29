import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store.ts";
import addonsStyles from "./addons.module.css";
import BillingEnum from "../../../enums/BillingEnum.ts";
import FormType from "../../../types/FormType.ts";
import Wrapper from "../../common/layout/Wrapper/Wrapper.tsx";
import Headline from "../../common/layout/Headline/Headline.tsx";
import CheckInput from "../CheckInput/CheckInput.tsx";
import buttonStyles from "../../common/layout/Button/button.module.css";
import Button from "../../common/layout/Button/Button.tsx";
import {
  addAddon,
  removeAddon,
  setNextStep,
  setPrevStep,
} from "../../../store/appSlice.ts";
import GetFormData from "../../../hooks/getFormData.ts";
import addonsList from "../../../constans/AddonsList.ts";

const Addons = () => {
  const formData: FormType = GetFormData();
  const dispatch: AppDispatch = useDispatch();

  const handlePrevClick = () => {
    dispatch(setPrevStep());
    window.history.back();
  };

  const handleNextClick = () => {
    dispatch(setNextStep());
  };

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.checked) {
      dispatch(removeAddon(e.currentTarget.value));
    } else {
      dispatch(addAddon(e.currentTarget.value));
    }
  };

  return (
    <Wrapper>
      <Headline
        title="Pick add-ons"
        description="Add-ons help enchance your gaming experience"
      />
      <div className={addonsStyles.addonsPickWrapper}>
        {/* ADDONS LIST */}
        {addonsList.map((addon, index) => (
          <CheckInput
            key={index}
            name={addon.value}
            description={addon.description}
            price={
              formData.billing === BillingEnum.Monthly
                ? addon.priceMonthly
                : addon.priceYearly
            }
            checked={formData.addonsSelected.includes(addon.value)}
            change={handleSelect}
            value={addon.value}
            billing={formData.billing}
          />
        ))}
      </div>
      {/* NAVIGATION */}
      <div className={buttonStyles.navigationWrapper}>
        <Button
          text="Go back"
          color="transparent"
          textColor="hsl(231, 11%, 63%)"
          click={handlePrevClick}
        />
        <Button
          text="Next Step"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          href="/step4"
          click={handleNextClick}
        />
      </div>
    </Wrapper>
  );
};

export default Addons;
