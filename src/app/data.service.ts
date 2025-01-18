import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private uploadedData: any[] = [];

  setData(data: any[]) {
    this.uploadedData = data;
  }

  getData() {
    return this.uploadedData;
  }
}
