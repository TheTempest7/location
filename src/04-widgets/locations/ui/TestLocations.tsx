import React from "react";
import {observer} from "mobx-react-lite";
import {TestLocationsList} from "06-entities/locations";

export const TestLocations = observer( () => {

    return (
        <div>
            <TestLocationsList/>
            <button
                onClick={() => {
                }}
            >
                Добавить тестовую локацию
            </button>
            <button
                onClick={() => {
                }}
            >
                Вывести результат в консоль
            </button>
        </div>
    );
})
