import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IBillingState } from "../model/app.model";

export namespace BillingSelector{
    export const billingState = createFeatureSelector<IBillingState>('billing');
}