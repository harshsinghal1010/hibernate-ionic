import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './interview.model';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {


  
  constructor(private httpClient: HttpClient) {}


  getAllQuestions (): Observable<Question[]> {
    return this.httpClient.get<Question[]>('./assets/interview.json')
  }

  getOne(queID:number , queList:Question[]){
   return queList[queID];
  }
 
}
