import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  constructor(private dataService: DataService) { }

  events: any;
  ngOnInit(): void {
    this.events = this.dataService.datas;
    console.log(this.events);
  }

}
