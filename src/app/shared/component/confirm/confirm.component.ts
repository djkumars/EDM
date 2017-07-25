import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
    public status = "open";
    constructor() { }
    public onClose() { this.status = "closed"; }
    public onAccept() { this.status = "accepted"; }
    public onDecline() { this.status = "declined"; }
    ngOnInit() {
  }

}
