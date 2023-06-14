import { ChangeDetectorRef, Component } from '@angular/core';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-app1';
  data = 'data app 1';
  keyname = 'app1';
  message = 'hello a message from app 1';
  constructor(private cdr: ChangeDetectorRef) {
    fromEvent(window,'event2').subscribe((event:any)=>{
      this.message=event.detail;
      this.cdr.detectChanges()
    })
  }
  onsave() {
    localStorage.setItem(this.keyname, this.data);
  }
  onget() {
    this.data = localStorage.getItem(this.keyname) || 'not found';
  }
  send() {
    const event = new CustomEvent('event', { detail: this.message });
    dispatchEvent(event);
  }
}
