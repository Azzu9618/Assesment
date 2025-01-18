import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  // standalone: true,
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  file: File | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onFileSelect(event: any) {
    this.file = event.target.files[0];
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('file', this.file as File);

    this.http.post('/api/upload', formData).subscribe(() => {
      this.router.navigate(['/preview']);
    });
  }
}
