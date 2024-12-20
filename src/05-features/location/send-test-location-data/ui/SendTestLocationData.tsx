import {Button} from "07-shared/ui/Button/Button";
import {useStore} from "07-shared/lib/hooks/useStore";
import {memo} from "react";

import s from './SendTestLocationData.module.scss';

export const SendTestLocationData = memo( () => {

    const {sliceLocation} = useStore();

    const sendDataHandler = () => {
        sliceLocation.submitTestData()
    }

    return (<div className={s.wrapper}>
        <Button onClick={sendDataHandler}> Вывести результат в консоль </Button>
    </div>)
})

