import {observer} from "mobx-react-lite";
import {TestLocationsList} from "06-entities/locations";
import {AddTestLocation} from "05-features/location/add-test-location";
import {SendTestLocationData} from "05-features/location/send-test-location-data";

import s from './TestLocations.module.scss';

export const TestLocations = observer( () => {

    return (
        <div className={s.wrapper}>
            <TestLocationsList />
            <AddTestLocation />
            <SendTestLocationData />
        </div>
    );
})
