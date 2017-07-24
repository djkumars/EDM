import { Component, OnInit } from '@angular/core';
import { sampleProducts } from './product';
//import { GridModule } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  //styleUrls: ['./dashboard.component.css']
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

 private gridData: any[] = sampleProducts;
  constructor() { }

  ngOnInit() {
  }

}


 