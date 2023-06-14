import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-app1';
  data = 'data app 1';
  keyname='app1';
  onsave(){
    localStorage.setItem(this.keyname, this.data);
  }
  onget(){
   this.data = localStorage.getItem(this.keyname)||'not found';
  }
}
