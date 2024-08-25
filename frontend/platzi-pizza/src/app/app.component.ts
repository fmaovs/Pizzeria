// @ts-ignore
import { HttpClient, HttpHeaders } from '@angular/common/http';
// @ts-ignore
import { Component, OnInit } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pizzas: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const requestOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic dXNlcjo0Y2NhZmE0Ni02ZjhkLTRlMGYtOWZmYy02OTMyNWYyYzViMzc='
      }),
    };

    this.http.get('http://localhost:8080/api/pizzas/available', requestOptions).subscribe((response: any) => {
      this.pizzas = response;
    });
  }
}
