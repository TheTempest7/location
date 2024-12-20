import {Button} from "07-shared/ui/Button/Button";
import {useStore} from "07-shared/lib/hooks/useStore";

export const AddTestLocation = () => {

    const {sliceLocation} = useStore()

    const addTestLocationHandler = () => {
        sliceLocation.addTestLocation()
    }

    return (<div>
        <Button onClick={addTestLocationHandler}>
            Добавить тестовую локацию
        </Button>
    </div>)
}
