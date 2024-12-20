import {memo, useEffect, useState} from "react";
import {MenuItem, Select} from "@mui/material";
import {ISelectItem} from "07-shared/types/common";
import {convertSelectData} from "./lib/utils";
import {ISelectComponent} from "./types";

import s from './SelectComponent.module.scss';



export const SelectComponent = memo(
    ({value,items, onChange, id, inscription ,className = ''}: ISelectComponent) => {
    const [currentVal, setCurrentValue] = useState(value);

    useEffect(() => {
        setCurrentValue(value)
    }, [value]);

    return (
        <div className={s.wrapper+' '+ className}>
            <p>{inscription}</p>
            <Select
                className={s.select}
                id={id}
                name={currentVal.name}
                value={currentVal.value.toString()}
                onChange={(e)=> {
                    onChange(convertSelectData({value: e.target,id, items}))
                }}
            >
        {items.map((item:ISelectItem, index: number)=> {
            return <MenuItem key={index} value={item.value}>
                <i className="fa-solid fa-location-dot"></i>
              <span className={s.option}>{item.name}</span>
            </MenuItem>
        })}
            </Select>
        </div>)
})

console.warn = () => {};
