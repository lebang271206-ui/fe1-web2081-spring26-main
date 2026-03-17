import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['',[Validators.required]],
      password: ['', [Validators.required, , Validators.minLength(6)]],
    });
  }

  get name() {
  return this.registerForm.get('name');
}

get email() {
  return this.registerForm.get('email');
}

get password() {
  return this.registerForm.get('password');
}

  submitForm() {
  if (this.registerForm.invalid) {
    console.log('Form không hợp lệ');
    return;
  }

  console.log('Form hợp lệ', this.registerForm.value);
}
}