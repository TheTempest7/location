export interface ISelectItem {
    value: number | string;
    name: string;
}

export interface ISelectNewValue extends ISelectItem{
    id: string;
}
