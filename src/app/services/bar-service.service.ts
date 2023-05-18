import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenseModel } from '../model/expense-model';

@Injectable({
  providedIn: 'root'
})
export class BarServiceService {
  private baseURL="http://localhost:8100/allExpense";

  constructor(private httpClient:HttpClient) { }

  getAllExpense():Observable<ExpenseModel[]>{
    return this.httpClient.get<ExpenseModel[]>(`${this.baseURL}`);
  }
}
