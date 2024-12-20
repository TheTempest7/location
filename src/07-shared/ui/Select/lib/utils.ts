import {ISelectNewValue} from "07-shared/types/common";
import {IConvertSelectData} from "../types";

export const convertSelectData = ({value, id, items}:IConvertSelectData):ISelectNewValue => {
    return       {
        id,
        value: value.value,
        name: items.filter((item)=> item.value === value.value)[0].name
    };
}
