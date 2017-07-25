import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
              <div class="example-wrapper">
            <kendo-dropdownbutton [data]="data">
                User Settings
            </kendo-dropdownbutton>
        </div>
  `,
//templateUrl: './menu.component.html',
//  styles: ['.example-wrapper,.example-col{ vertical-align: top; }'],
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
data: Array<any> = [{
        text: 'My Profile'
    }, {
        text: 'Friend Requests'
    }, {
        text: 'Account Settings'
    }, {
        text: 'Support'
    }, {
        text: 'Log Out'
    }];
  

  ngOnInit() {
  }

}