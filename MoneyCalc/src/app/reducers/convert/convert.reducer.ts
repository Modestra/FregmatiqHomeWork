import { createReducer, on } from "@ngrx/store";
import { DeleteConvert, SetConvert } from "./convert.actions";

const initialConvert: any[] = [];

export const ConvertRedicer = createReducer(initialConvert,
    on(SetConvert, (valute) => {
        initialConvert.push(valute)
        return initialConvert
    }),
    on(DeleteConvert, () => {
        initialConvert.pop()
        return initialConvert
    })
)