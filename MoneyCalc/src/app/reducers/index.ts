import { isDevMode } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { ConvertRedicer } from "./convert/convert.reducer";

export interface State {

}

export const reducers: ActionReducerMap<State> = {
    conventer: ConvertRedicer
};

export const metaReduces: MetaReducer<State>[] = isDevMode() ? [] : [];