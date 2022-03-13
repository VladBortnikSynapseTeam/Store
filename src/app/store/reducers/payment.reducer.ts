import {Action, createReducer, on} from '@ngrx/store';
import { PaymentActions } from '../actions/payment.actions';
import { IPaymentState } from '../model/app.model';
import { paymentState } from '../state/payment.state';

const paymentReducer = createReducer(
    paymentState,
    on(PaymentActions.setPaymentData, (state,{
        paymentName,
        paymentNumber,
        paymentExpire,
        paymentCode,
    })=>({
        ...state,
        paymentName,
        paymentNumber,
        paymentExpire,
        paymentCode,
    }))
)

export function PaymentReducer(state: IPaymentState | undefined, action: Action){
    return paymentReducer(state,action);
}