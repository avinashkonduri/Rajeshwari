import { Component, OnInit } from '@angular/core';

interface Animal {
  name: string;
  sound: string;
}
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  foodItems: number[]= [1,2,3];
  foodItems1: string[] = ["mushroom","cabaygi","Allu"];
  animals: Animal[]=[
    {name:'dog',sound:'Mow!!!'},
    {name:'cat',sound:'Moew!!'},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  getText(_evt: any){
    console.log(_evt);
    console.log(_evt.target.value);
  }
}
