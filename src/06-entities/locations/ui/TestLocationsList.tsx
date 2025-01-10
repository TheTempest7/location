import {TestLocationForm} from "06-entities/locations/ui/TestLocationForm/TestLocationForm";
import {observer} from "mobx-react-lite";
import {useStore} from "07-shared/lib/hooks/useStore";
import {toJS} from "mobx";
import {useMemo} from "react";

export const TestLocationsList =observer( () => {

    const {sliceLocation} = useStore();

    const locationItems = useMemo(()=> toJS(sliceLocation.locations),[sliceLocation.locations])
    const envsItems = useMemo(()=> toJS(sliceLocation.envs),[sliceLocation.envs])

    return (
        <div>
            { toJS(sliceLocation.testLocations).map((location) => (
                <TestLocationForm
                    key={location.id}
                    locationData={location}
                    locations={locationItems}
                    envs={envsItems}
                    changeTestLocation={sliceLocation.changeTestLocationData.bind(sliceLocation)}
                    deleteTestLocation={sliceLocation.deleteTestLocation.bind(sliceLocation)}
                />
            ))}
        </div>
    )
})
