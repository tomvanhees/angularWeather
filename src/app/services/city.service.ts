import { Injectable } from '@angular/core';
import * as CITIES from '../city.list.json'

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }


  get(){
    return (CITIES as any).default
  }
}
