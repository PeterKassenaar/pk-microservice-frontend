import {Component} from '@angular/core';
import {Distance} from "./shared/distance.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // local variables
  zipcode1: string = '';
  zipcode2: string = '';
  // url: string = 'http://localhost:3000/distance/'; // should go in environment DEV-variable
  url: string = 'https://pk-microservice.herokuapp.com/'; // should go in environment PROD-variable
  distance: Distance = {distance: -1};


  // constructor
  constructor(private http: HttpClient) {
  }

  // methods
  calculate() {
    // we use http directly here - should be done via a service or the like
    this.http.get<Distance>(`${this.url}${this.zipcode1}/${this.zipcode2}`)
      .subscribe((res) => this.distance = res);
  }

  clear() {
    this.distance = {distance: -1};
  }
}
