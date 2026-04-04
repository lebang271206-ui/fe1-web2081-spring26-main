import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ){
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm() {
    this.http.post<{ accessToken: string; user: any }>('http://localhost:3000/login', this.form.value).subscribe({
      next: (res) => {
        alert('Đăng nhập thành công');
        localStorage.setItem("token", res.accessToken);
        localStorage.setItem("user", JSON.stringify(res.user));
        this.router.navigateByUrl("/stories");
      },
    });
  }
  

  

ngOnInit() {
  const token = localStorage.getItem("token");
  if (token) {
    this.router.navigateByUrl("/stories");
  }
}
}
