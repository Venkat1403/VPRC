import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  title: string;
  description: string;
  img: string = '';
  datas = [{ title: 'venky code', description: 'check data', img: 'assets/immages/parrot.jpg' }];

  saveform(data) {
    this.datas.push(data);
  }
}
