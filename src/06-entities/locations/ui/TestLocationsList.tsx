import React from "react";
import {TestLocationForm} from "07-shared/ui/TestLocationForm/TestLocationForm";
import {observer} from "mobx-react-lite";
import {useStore} from "07-shared/lib/hooks/useStore";

export const TestLocationsList =observer( () => {

    const {sliceLocation} = useStore();

    return (
        <>
            {sliceLocation.locations.map((location, index) => (
                <TestLocationForm key={`location-${index}`} />
            ))}
        </>
    )
})

