import {createContext, useContext} from "react";
import RootStore from "01-app/store/rootStore";

export const RootStoreContext = createContext<RootStore | null>(null);

export const useStore = () => {
    const context = useContext(RootStoreContext);

    if(context===null) {
        throw Error('Context is not provided')
    }

    return context;
}
