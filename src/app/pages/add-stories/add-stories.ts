import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule], 
  templateUrl: './add-stories.html',
  styleUrl: './add-stories.css',
})
export class AddStory {
  addForm: FormGroup; 

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      title: '', 
    });
  }
  submitForm() {
  console.log(this.addForm.value);
}
}