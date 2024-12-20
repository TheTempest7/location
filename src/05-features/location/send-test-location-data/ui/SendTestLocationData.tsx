import {Button} from "07-shared/ui/Button/Button";
import {useStore} from "07-shared/lib/hooks/useStore";

export const SendTestLocationData = () => {

    const {sliceLocation} = useStore();

    const sendDataHandler = () => {
        sliceLocation.submitTestData()
    }

    return (<div>
        <Button onClick={sendDataHandler}> Вывести результат в консоль </Button>
    </div>)
}
