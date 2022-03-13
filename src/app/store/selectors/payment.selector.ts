import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPaymentState } from "../model/app.model";

export namespace PaymentSelector{
    export const paymentState = createFeatureSelector<IPaymentState>('payment')
}