import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signUpForm: FormGroup;
  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  signUp() {
    this.http
      .post('http://localhost:3000/register', this.signUpForm.value)
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
