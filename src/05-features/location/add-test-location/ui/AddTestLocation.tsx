import {Button} from "07-shared/ui/Button/Button";
import {useStore} from "07-shared/lib/hooks/useStore";
import {memo} from "react";

import s from './AddTestLocation.module.scss';

export const AddTestLocation =memo( () => {

    const {sliceLocation} = useStore()

    const addTestLocationHandler = () => {
        sliceLocation.addTestLocation()
    }

    return (<div className={s.wrapper}>
        <Button onClick={addTestLocationHandler}>
            Добавить тестовую локацию
        </Button>
    </div>)
})

