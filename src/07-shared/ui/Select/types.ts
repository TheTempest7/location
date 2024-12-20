import {ISelectItem, ISelectNewValue} from "../../types/common";

export interface IConvertSelectData  {
    value: ISelectItem;
    id: string;
    items: ISelectItem[];
}

export interface ISelectComponent {
    value: ISelectItem;
    items: ISelectItem[];
    onChange: (val:ISelectNewValue)=> void;
    id: string;
    inscription: string;
    className?: string;
}
