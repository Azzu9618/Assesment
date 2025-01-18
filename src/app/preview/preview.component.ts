import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './preview.component.html',
  styleUrls:['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  data: any[] = [];
  columns: string[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get('/api/preview').subscribe((response: any) => {
      this.data = response.data;
      this.columns = response.columns;
    });
  }

  goToSummary() {
    this.router.navigate(['/summary']);
  }
}
