import { Component, OnInit } from '@angular/core';
import { sampleProducts } from './product';
//import { GridModule } from '@progress/kendo-angular-grid';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

 //import { Ng2MenuModule } from 'ng2-Menu';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  //styleUrls: ['./dashboard.component.css']
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    private gridView: GridDataResult;
    private data: Object[];
    private pageSize: number = 2;
    private skip: number = 0;
    private gridData: any[] = sampleProducts;

    public multiple: boolean = false;
    public allowUnsort: boolean = true;
    private sort: SortDescriptor[] = [];

  constructor() { this.loadItems();
}
 

protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

protected sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadItems();
    }
    


// private sortItems(): void {
//         this.gridView = {
//             data: orderBy(this.gridView.data, this.sort), //this.gridData.slice(this.skip, this.skip + this.pageSize),
//             total: this.gridData.length
//         };
//     }
private loadItems(): void {
  //debugger;
    //this.gridData  = orderBy( this.gridView.data, this.sort);
        this.gridView = {

            data: orderBy(this.gridData.slice(this.skip, this.skip + this.pageSize), this.sort),
            total: this.gridData.length
        };
    }

    public sliderChange(pageIndex: number): void {
        this.skip = (pageIndex - 1) * this.pageSize;
    }

  ngOnInit() {
  }

}


 