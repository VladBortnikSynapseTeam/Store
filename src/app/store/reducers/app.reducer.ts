import { Action, createReducer, on } from "@ngrx/store";
import { AppActions } from "../actions/app.action";
import { IAppState } from "../model/app.model";
import { initialState } from "../state/app.state";

const appReducer = createReducer(
    initialState,
    on(AppActions.nextStage, (state) =>({
        ...state,
        stage: state.stage + 1
    }))
)
 

export function AppReducer(state: IAppState | undefined, action: Action) {
    return appReducer(state, action)
}
