import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-story.html',
})
export class AddStory {
  addForm: FormGroup;
  productForm: FormGroup;

  stories: any[] = [];

  loading = false;
  error = '';
  success = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.addForm = this.fb.group({
      title: '',
      author: '',
      views: 0
    }); 

    this.productForm = this.fb.group({
      name: '',
      price: 0
    });

        this.loadStories();
  }

    submitForm() {
    this.loading = true;
    this.error = '';
    this.success = '';

    const data = this.addForm.value;

    this.http.post('http://localhost:3000/stories', data).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Thêm truyện thành công';
        this.addForm.reset({ views: 0 });
        this.loadStories();
      },
      error: () => {
        this.loading = false;
        this.error = 'Có lỗi xảy ra';
      },
    });
  }

  submitProduct() {
    this.loading = true;
    this.error = '';
    this.success = '';

    const data = this.productForm.value;

    this.http.post('http://localhost:3000/products', data).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Thêm product thành công';
        this.productForm.reset();
      },
      error: () => {
        this.loading = false;
        this.error = 'Có lỗi xảy ra';
      },
    });
  }

  loadStories() {
    this.loading = true;
    this.error = '';

    this.http.get<any[]>('http://localhost:3000/stories').subscribe({
      next: (res) => {
        this.stories = res;
        this.loading = false;
      },
    });
  }
}
  