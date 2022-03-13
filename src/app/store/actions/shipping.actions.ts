import { createAction, props } from "@ngrx/store";
import { IShippingState } from "../model/app.model";

export namespace ShippingActions {
    export const setShippingData = createAction("SET_SHIPPING_DATA", props<{
        shippingFullName: string;
        shippingPhone: string;
        shippingAddress: string;
        shippingApt: string;
        shippingCity: string;
        shippingCountry: string;
        shippingZip: string;
    }>())
}