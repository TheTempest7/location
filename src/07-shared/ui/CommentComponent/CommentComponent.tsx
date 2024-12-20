import {Input} from "@mui/material";
import {ChangeEvent, memo} from "react";

import s from './CommentComponent.module.scss';


interface ICommentComponent {
    value: string;
    onChange: (e:ChangeEvent<HTMLInputElement>)=> void;
    className?: string;
}

export const CommentComponent = memo( ({value, onChange, className = ''}:ICommentComponent) => {

    return (<div className={s.wrapper + ' ' + className }>
        <span>Подсказка</span>
        <Input
            placeholder={'Комментарий по локации'}
            fullWidth
            value={value}
            onChange={onChange}
            startAdornment={<i className="fa-solid fa-question"></i>}
        />
    </div>)
})

