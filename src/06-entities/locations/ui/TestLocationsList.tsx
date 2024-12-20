import {TestLocationForm} from "06-entities/locations/ui/TestLocationForm/TestLocationForm";
import {observer} from "mobx-react-lite";
import {useStore} from "07-shared/lib/hooks/useStore";
import {toJS} from "mobx";

export const TestLocationsList =observer( () => {

    const {sliceLocation} = useStore();

    return (
        <>
            { toJS(sliceLocation.testLocations).map((location) => (
                <TestLocationForm
                    key={location.id}
                    locationData={location}
                    locations={toJS(sliceLocation.locations)}
                    envs={toJS(sliceLocation.envs)}
                />
            ))}
        </>
    )
})
