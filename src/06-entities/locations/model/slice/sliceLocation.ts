import { makeAutoObservable, runInAction } from "mobx";
import { v4 as uuidv4 } from 'uuid';
import sample from "07-shared/lib/data.json";
import {sleep} from "07-shared/api/instance";
import {Env, IChangeTestLocationData, Location, Server, TestLocation} from "../types/types";



export class SliceLocation {
  constructor() {
    makeAutoObservable(this);
  }
  isLoading = false;
  locations: Location[] = [];
  envs: Env[] = [];
  servers: Server[] = [];
  testLocationCount:number = 1;
  testLocations: TestLocation[] =[
      {
        count:1,
    id: uuidv4(),
    location: {
      name: 'testenter.ru_01',
      value: 1
    },
    env: {name:'Test_192.168.220.157',value: 1},
    servers: ['MPTEST41', 'MPTEST42'],
    hint: 'first',
  }
  ];

  async  fetchData  ()  {
    this.isLoading = true;
    await sleep(3000);
    runInAction(() => {
      this.locations = sample.locations;
      this.envs = sample.envs;
      this.servers = sample.servers;
      this.isLoading = false;
    });
  };

  changeTestLocationData({id,property,value}:IChangeTestLocationData){
    this.testLocations = this.testLocations.map((testLocation)=> {
      if(testLocation.id===id) {
        return {
          ...testLocation,
          [property]: value
        }
      }
      return testLocation
    })
  };

  addTestLocation() {
    this.testLocations.push({
      count: this.testLocationCount+1,
      id: uuidv4(),
      location: {
        name: 'testenter.ru_01',
        value: 1
      },
      env: {name:'Test_192.168.220.157',value: 1},
      servers: this.servers.map((server)=> server.name),
          hint: '',
    })
    this.testLocationCount+=1
  }

  submitTestData(){
    const result = this.testLocations.map((location)=>({
      locationID: location.location.value,
      envID: location.env.value,
      hint: location.hint,
    }))

    console.log(result)
  }

  deleteTestLocation(id:string){
    this.testLocations = this.testLocations.filter((location)=>location.id!==id)
  }
}

export const sliceLocation = new SliceLocation();

