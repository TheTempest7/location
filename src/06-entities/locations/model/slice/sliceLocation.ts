import { makeAutoObservable, runInAction } from "mobx";
import sample from "07-shared/lib/data.json";
import {sleep} from "07-shared/api/instance";


export interface Location {
  locationID: number;
  name: string;
}

export interface TestLocation extends Location {
  id: string;
  location: string;
  env: string;
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

export class SliceLocation {
  isLoading = false;
  locations: Location[] = [];
  envs: Env[] = [];
  servers: Server[] = [];
  testLocations: TestLocation[] =[];

  async  fetchData  ()  {
    this.isLoading = true;
    await sleep(30000);
    console.log(sample)
    runInAction(() => {
      this.locations = sample.locations;
      this.envs = sample.envs;
      this.servers = sample.servers;
      this.isLoading = false;
    });
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const sliceLocation = new SliceLocation();

