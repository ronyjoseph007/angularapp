import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  signUp() {
    this.http
      .post('http://localhost:3000/register', {
        email: 'sasas',
        password: 'sasas',
      })
      .subscribe(
        (res) => {
          console.log(res + 'kkki');
          this.router.navigate(['login']);
        },
        (err) => {
          console.log(err + 'err on signup0000888');
        }
      );
  }
}
