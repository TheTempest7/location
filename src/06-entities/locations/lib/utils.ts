import {ISelectItem} from "07-shared/types/common";

interface IDataToSelect extends Record<string, any> {
    name: string;
}

export const convertDataToSelect = (arr:IDataToSelect[], property: string): ISelectItem[] => {
    return arr.map((item)=> {
        return {
            name: item.name,
            value: item[property]
        }
    });
}
