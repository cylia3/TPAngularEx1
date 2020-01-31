import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { error } from 'protractor';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  heure: number;
  minute: number;
  second: number;
  
  obs: Observable<number>;

  constructor() { }


  getDonnes() {
    const date = new Date();
    this.heure = date.getHours();
    this.minute = date.getMinutes();
    this.second = date.getSeconds();
  }
  ngOnInit() {
    this.getDonnes();
    this.obs = interval(1000);
    this.obs.subscribe(
      s => {
        this.getDonnes();
      }
    );
  }
}
