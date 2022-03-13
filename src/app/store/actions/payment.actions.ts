import { createAction, props } from "@ngrx/store";
import { IPaymentState } from "../model/app.model";

export namespace PaymentActions{
    export const setPaymentData = createAction("SET_PAYMENT_DATA", props<{
        paymentName: string,
        paymentNumber: string,
        paymentExpire: string,
        paymentCode: string
    }>())
}