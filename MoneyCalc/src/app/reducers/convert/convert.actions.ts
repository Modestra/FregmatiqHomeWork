import { State, Store, createAction, props } from "@ngrx/store";
import { ConvertCoupe } from "../../entity/vatues";

export const SetConvert = createAction("[Convert Component] SetConvert", props<{ coupe: ConvertCoupe }>())
export const DeleteConvert = createAction("[Convert Component] DeleteConvert")
export const GetConvertList = createAction("[Convert Component] GetConvertList")