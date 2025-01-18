import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  // standalone: true,
  styleUrls:['./summary.component.scss'],
  templateUrl: './summary.component.html',
})
export class SummaryComponent implements OnInit {
  correctRows: number = 0;
  incorrectRows: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/summary').subscribe((response: any) => {
      this.correctRows = response.correct;
      this.incorrectRows = response.incorrect;
    });
  }
}
