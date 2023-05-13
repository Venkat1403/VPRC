import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';  //Service page import
import { FormControl, FormGroup, Validators } from '@angular/forms'; //Using Reactive Form
import { Router } from '@angular/router';

@Component({
  selector: 'app-datafile',
  templateUrl: './datafile.component.html',
  styleUrls: ['./datafile.component.css']
})
export class DatafileComponent implements OnInit {
  userForm: FormGroup;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'img': new FormControl(null, Validators.required)
    })
  }

  onSubmit(data) {
    console.log(this.userForm.value);
    this.dataService.saveform(data);
    this.router.navigate(['']);
    console.log(data.img);
  }
}
