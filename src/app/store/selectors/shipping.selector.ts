import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IShippingState } from "../model/app.model";

export namespace ShippingSelectors{
    export const shippingState = createFeatureSelector<IShippingState>('shipping')
}