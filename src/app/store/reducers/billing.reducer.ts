import {Action, createReducer, on} from '@ngrx/store';
import { BillingActions } from '../actions/billing.actions';
import { IBillingState } from '../model/app.model';
import { billingState } from '../state/billing.state';

const billingReducer = createReducer(
    billingState,
    on(BillingActions.setBillingData, (state, {
        billingFullName,
        billingPhone,
        billingAddress,
        billingApt,
        billingCity,
        billingCountry,
        billingZip,
    }) => ({
        ...state,
        billingFullName,
        billingPhone,
        billingAddress,
        billingApt,
        billingCity,
        billingCountry,
        billingZip,
    }))
)

export function BillingReducer(state: IBillingState | undefined, action: Action){
    return billingReducer(state,action);
}