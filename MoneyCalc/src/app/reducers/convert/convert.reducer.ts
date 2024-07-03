import { createReducer, on } from "@ngrx/store";
import { DeleteConvert, GetConvertList, SetConvert } from "./convert.actions";
import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { ConvertCoupe } from "../../entity/vatues";

export interface ConverterState extends EntityState<ConvertCoupe> { }

export const ConvertAdapter: EntityAdapter<ConvertCoupe> = createEntityAdapter<ConvertCoupe>();

const initialConvert: ConverterState = ConvertAdapter.getInitialState();

export const ConvertRedicer = createReducer(initialConvert,
    on(SetConvert, (valute) => {
        return valute
    }),
    on(DeleteConvert, (state) => {
        return state
    })
)