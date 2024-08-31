import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MonthDataService {
  private cache: { [key: string]: string } = {};

  constructor(private http: HttpClient) {}

  getMonthData(date: Date): Observable<string> {
    const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;

    if (this.cache[monthKey]) {
      return of(this.cache[monthKey]);
    }

    return this.http.get<any>(`https://api.example.com/month-data?year=${date.getFullYear()}&month=${date.getMonth() + 1}`).pipe(
      map(response => {
        const data = response.data;
        this.cache[monthKey] = data;
        return data;
      })
    );
  }
}