import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-app2';
  data = 'data app 2';
  keyname = 'app2';
  message = '';
  constructor() {

  }
  ngOnInit(): void {
    fromEvent(window, 'event2').subscribe((event: any) => {
      console.log(event);
      this.message = event.detail;
    });
  }
  onsave() {
    localStorage.setItem(this.keyname, this.data);
  }
  onget() {
    this.data = localStorage.getItem(this.keyname) || 'not found';
  }
}
