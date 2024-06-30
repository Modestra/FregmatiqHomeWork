import { createReducer, on } from "@ngrx/store";
import { DeleteConvert, GetConvertList, SetConvert } from "./convert.actions";

const initialConvert: any[] = [];

export const ConvertRedicer = createReducer(initialConvert,
    on(SetConvert, (valute, { coupe }) => {
        initialConvert.push(coupe)
        return initialConvert
    }),
    on(GetConvertList, (valute) => {
        return valute
    }),
    on(DeleteConvert, () => {
        initialConvert.pop()
        return initialConvert
    })
)