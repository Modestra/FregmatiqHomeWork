import { isDevMode } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";

export interface State {

}

export const reducers: ActionReducerMap<State> = {};

export const metaReduces: MetaReducer<State>[] = isDevMode() ? [] : [];