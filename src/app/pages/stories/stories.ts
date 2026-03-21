import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Story {
  id: number;
  title: string;
  author: string;
  views: number;
}

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories implements OnInit {
  stories: Story[] = [];

  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.loading = true;
    this.error = '';

    console.log('CALL API');

    this.http.get<Story[]>('http://localhost:3000/stories').subscribe({
      next: (data) => {
        console.log('SUCCESS:', data);
        this.loading = false;
        this.stories = data;
      },
      error: () => {

         console.log('ERROR:', this.error);
        this.loading = false;
        this.error = 'Không thể tải dữ liệu';
      },
    });
  }

  deleteStory(id: number) {
    const confirmDelete = confirm('Bạn có chắc muốn xóa không?');
    if (!confirmDelete) return;

    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter((story) => story.id !== id);
        alert('Xóa thành công');
      },
      error: () => {
        alert('Xóa thất bại');
      },
    });
  }
}