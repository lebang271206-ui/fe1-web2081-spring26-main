import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', Validators.min(0.01)],
      category: ['', [Validators.required]],
    });
  }

  get name() {
  return this.addForm.get('name');
}

get price() {
  return this.addForm.get('price');
}

  submitForm() {
  if (this.addForm.invalid) {
    console.log('Form không hợp lệ');
    return;
  }

  console.log('Form hợp lệ', this.addForm.value);
}
}