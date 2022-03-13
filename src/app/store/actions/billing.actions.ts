import { createAction, props } from "@ngrx/store";
import { IBillingState } from "../model/app.model";

export namespace BillingActions{
    export const setBillingData = createAction("SET_BILLING_DATA", props<{
        billingFullName: string;
        billingPhone: string;
        billingAddress: string;
        billingApt: string;
        billingCity: string;
        billingCountry: string;
        billingZip: string;
    }>())
}