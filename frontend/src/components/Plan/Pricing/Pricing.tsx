import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store.ts";
import BillingEnum from "../../../enums/BillingEnum.ts";
import pricingStyles from "./pricing.module.css";
import FormType from "../../../types/FormType.ts";
import Wrapper from "../../common/layout/Wrapper/Wrapper.tsx";
import Headline from "../../common/layout/Headline/Headline.tsx";
import ClickableDiv from "../../common/layout/ClickableDiv/ClickableDiv.tsx";
import Card from "../Card/Card.tsx";
import buttonStyles from "../../common/layout/Button/button.module.css";
import Button from "../../common/layout/Button/Button.tsx";
import iconAdvanced from "./iconAdvanced.svg";
import iconPro from "./iconPro.svg";
import iconArcade from "./iconArcade.svg";
import {
  resetAddons,
  setBilling,
  setBillingPrice,
  setPlan,
} from "../../../store/appSlice.ts";
import PlanEnum from "../../../enums/PlanEnum.ts";
import usePlanPrice from "../../../hooks/usePlanPrice.ts";
import BillingSwitch from "../BillingSwitch/BillingSwitch.tsx";

interface Props {
  handleNextStep: () => void;
  handlePrevStep: () => void;
  formData: FormType;
}

const plans = [
  {
    src: iconArcade,
    title: "Arcade",
    priceMonthly: 9,
    priceYearly: 90,
    type: PlanEnum.Arcade,
  },
  {
    src: iconAdvanced,
    title: "Advanced",
    priceMonthly: 12,
    priceYearly: 120,
    type: PlanEnum.Advanced,
  },
  {
    src: iconPro,
    title: "Pro",
    priceMonthly: 15,
    priceYearly: 150,
    type: PlanEnum.Pro,
  },
];

const Pricing = ({ handleNextStep, handlePrevStep, formData }: Props) => {
  let checked = formData.billing === BillingEnum.Yearly;
  const dispatch: AppDispatch = useDispatch();
  const getPrice = usePlanPrice();
  const billingPrice = getPrice();

  useEffect(() => {
    dispatch(setBillingPrice(billingPrice));
  }, [billingPrice, dispatch]);

  const handlePlanClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    dispatch(setPlan(e.currentTarget.children[0].id));
  };

  const handleBillingSwitch: React.ChangeEventHandler<
    HTMLLabelElement
  > = () => {
    checked = !checked;
    dispatch(setBilling(checked ? BillingEnum.Yearly : BillingEnum.Monthly));
    dispatch(resetAddons());
  };

  return (
    <Wrapper>
      <Headline
        title="Select your plan"
        description="You have the option of monthly or yearly billing"
      />
      {/* PLAN OPTIONS */}
      <div className={pricingStyles.optionsWrapper}>
        {plans.map((plan, index) => (
          <ClickableDiv key={index} onClick={handlePlanClick}>
            <Card
              src={plan.src}
              title={plan.title}
              price={checked ? plan.priceYearly : plan.priceMonthly}
              id={plan.type}
              billing={formData.billing}
              isActive={formData.plan === plan.type}
            />
          </ClickableDiv>
        ))}
      </div>
      {/* BILLING TYPE SWITCH */}
      <BillingSwitch checked={checked} handleSwitch={handleBillingSwitch} />
      {/* NAVIGATION */}
      <div className={buttonStyles.navigationWrapper}>
        <Button
          text="Go back"
          color="transparent"
          textColor="hsl(231, 11%, 63%)"
          click={handlePrevStep}
        />
        <Button
          text="Next Step"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          click={handleNextStep}
          disabled={formData.plan === ""}
        />
      </div>
    </Wrapper>
  );
};

export default Pricing;
