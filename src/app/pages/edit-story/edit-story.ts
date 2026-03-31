import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-story',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-story.html',
  styleUrl: './edit-story.css',
})
export class EditStory {
  id: any;
  editForm: FormGroup;

  loading = false;
  error = '';
  success = '';


  constructor(private http: HttpClient,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("ID", this.id);
    this.editForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      author: [""],
      views: [0],
    })
  }

  ngOnInit() {
    this.http.get(`http://localhost:3000/stories/${this.id}`).subscribe({
      next: (data: any) => {
        this.editForm.patchValue({
          title: data.title,
          author: data.author,
          views: data.views,
        });
      },
    });
  }

  submitForm() {
    if (!this.id) return;

    this.loading = true;
    this.error = '';
    this.success = '';

    const data = this.editForm.value;

    this.http.put(`http://localhost:3000/stories/${this.id}`, data).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Cập nhật thành công';
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || 'Có lỗi xảy ra';
      },
    });
  }
}
