import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serve1Service {
  public employees=[
    {"name":"Ishan","id":194,"dept":"CSE"},
    {"name":"Aditya","id":587,"dept":"CCE"},
    {"name":"Kamil","id":849,"dept":"ECE"}
  ]
getEmployee(){
  return this.employees
}

  constructor() { }
}
