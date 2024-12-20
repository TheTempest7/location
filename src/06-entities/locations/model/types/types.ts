import {ISelectItem} from "07-shared/types/common";

export interface Location {
    locationID: number;
    name: string;
}

export interface TestLocation {
    count: number;
    id: string;
    location: ISelectItem;
    env: ISelectItem;
    servers: string[];
    hint: string;
}

export interface Env {
    envID: number;
    name: string;
}

export interface Server {
    serverID: number;
    name: string;
    locationID: number;
    envID: number;
}

export interface IChangeTestLocationData {
    id:string;
    property: string;
    value: string | Record<string, any>;
}
