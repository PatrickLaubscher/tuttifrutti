import { Injectable } from '@angular/core';
import { fruitsMock } from '../fruits-mock';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  fetchAllFruits(){
    return fruitsMock;
  }

}
