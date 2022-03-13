import { createFeatureSelector, createSelector, State } from "@ngrx/store";
import { IAppState } from "../model/app.model";

export namespace AppSelectors{
    export const state = createFeatureSelector<IAppState>('app');
    export const stage = createSelector(state, (state)=> state.stage)
}