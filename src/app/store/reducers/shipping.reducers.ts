import { Action, createReducer, on } from "@ngrx/store";
import { ShippingActions } from "../actions/shipping.actions";
import { IShippingState } from "../model/app.model";
import { shippingState } from "../state/shipping.state";

const shippingReducer = createReducer(
    shippingState,
    on(ShippingActions.setShippingData, (state, {
        shippingFullName,
        shippingPhone,
        shippingAddress,
        shippingApt,
        shippingCity,
        shippingCountry,
        shippingZip,
    }) => ({
        ...state,
        shippingFullName,
        shippingPhone,
        shippingAddress,
        shippingApt,
        shippingCity,
        shippingCountry,
        shippingZip
        
    }))
)
export function ShippingReducer(state: IShippingState | undefined, action: Action){
    return shippingReducer(state,action)
}