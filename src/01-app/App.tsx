import React, {useEffect} from "react";

import { observer } from "mobx-react-lite";
import {TestLocations} from "04-widgets/locations";
import {useStore} from "07-shared/lib/hooks/useStore";
import {Loader} from "../07-shared/ui/Loader/Loader";

import s from './App.module.scss';


const App= observer( () => {

    const {sliceLocation} = useStore();

    useEffect(()=>{
        sliceLocation.fetchData();
    },[])

  return (
    <div className={s.wrapper}>
        {!sliceLocation.isLoading && <TestLocations />}
        {sliceLocation.isLoading && <Loader />}
    </div>
  );
})

export default App;
