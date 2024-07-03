import { EntityState } from "@ngrx/entity";
import { ConverterState } from "./reducers/convert/convert.reducer";

export interface AppState {
    conventer: ConverterState
}