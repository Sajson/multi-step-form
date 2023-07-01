import { Action } from "redux";
import BillingEnum from "../enums/BillingEnum";

export enum ActionTypes {
  SET_USER_DATA = "SET_USER_DATA",
  SET_BILLING = "SET_BILLING",
  SET_BILLING_PRICE = "SET_BILLING_PRICE",
  SET_PLAN = "SET_PLAN",
  ADD_ADDON = "ADD_ADDON",
  REMOVE_ADDON = "REMOVE_ADDON",
  ADD_ADDON_PRICE = "ADD_ADDON_PRICE",
  REMOVE_ADDON_PRICE = "REMOVE_ADDON_PRICE",
  SET_TOTAL = "SET_TOTAL",
  SET_STEP = "SET_STEP",
  SET_LAST_STEP = "SET_LAST_STEP",
}

export interface SetUserDataAction extends Action<ActionTypes.SET_USER_DATA> {
  payload: {
    name: string;
    email: string;
    number: string;
  };
}

export interface SetBillingAction extends Action<ActionTypes.SET_BILLING> {
  payload: BillingEnum;
}

export interface SetBillingPriceAction
  extends Action<ActionTypes.SET_BILLING_PRICE> {
  payload: number;
}

export interface SetPlanAction extends Action<ActionTypes.SET_PLAN> {
  payload: string;
}

export interface AddAddonAction extends Action<ActionTypes.ADD_ADDON> {
  payload: string;
}

export interface RemoveAddonAction extends Action<ActionTypes.REMOVE_ADDON> {
  payload: string;
}

export interface AddAddonPrice extends Action<ActionTypes.ADD_ADDON_PRICE> {
  payload: number;
}

export interface RemoveAddonPrice
  extends Action<ActionTypes.REMOVE_ADDON_PRICE> {
  payload: number;
}

export interface SetTotalAction extends Action<ActionTypes.SET_TOTAL> {
  payload: number;
}

export interface SetStepAction extends Action<ActionTypes.SET_STEP> {
  payload: number;
}

export interface SetLastStepAction extends Action<ActionTypes.SET_LAST_STEP> {
  payload: number;
}

export type AppAction =
  | SetUserDataAction
  | SetBillingAction
  | SetBillingPriceAction
  | SetPlanAction
  | AddAddonAction
  | RemoveAddonAction
  | AddAddonPrice
  | RemoveAddonPrice
  | SetLastStepAction
  | SetTotalAction
  | SetStepAction;

export function setUserData(
  name: string,
  email: string,
  number: string
): SetUserDataAction {
  return {
    type: ActionTypes.SET_USER_DATA,
    payload: {
      name,
      email,
      number,
    },
  };
}

export function setBilling(billing: BillingEnum): SetBillingAction {
  return {
    type: ActionTypes.SET_BILLING,
    payload: billing,
  };
}

export function setBillingPrice(price: number): SetBillingPriceAction {
  return {
    type: ActionTypes.SET_BILLING_PRICE,
    payload: price,
  };
}

export function setPlan(plan: string): SetPlanAction {
  return {
    type: ActionTypes.SET_PLAN,
    payload: plan,
  };
}

export function addAddon(addon: string): AddAddonAction {
  return {
    type: ActionTypes.ADD_ADDON,
    payload: addon,
  };
}

export function removeAddon(addon: string): RemoveAddonAction {
  return {
    type: ActionTypes.REMOVE_ADDON,
    payload: addon,
  };
}

export function addAddonPrice(price: number): AddAddonPrice {
  return {
    type: ActionTypes.ADD_ADDON_PRICE,
    payload: price,
  };
}

export function removeAddonPrice(price: number): RemoveAddonPrice {
  return {
    type: ActionTypes.REMOVE_ADDON_PRICE,
    payload: price,
  };
}

export function setTotal(total: number): SetTotalAction {
  return {
    type: ActionTypes.SET_TOTAL,
    payload: total,
  };
}

export function setStep(step: number): SetStepAction {
  return {
    type: ActionTypes.SET_STEP,
    payload: step,
  };
}

export function setLastStep(lastStep: number): SetLastStepAction {
  return {
    type: ActionTypes.SET_LAST_STEP,
    payload: lastStep,
  };
}
