import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Question } from './interview.model';
import { InterviewService } from './interview.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.page.html',
  styleUrls: ['./interview.page.scss'],
})
export class InterviewPage implements OnInit {

  jsonList:Question[];
  constructor(private httpClient: HttpClient , private interviewService : InterviewService) {}

  public getALL(){
    this.interviewService.getAllQuestions().subscribe(
      data => {
       this.jsonList = data as Question [];	 // FILL THE ARRAY WITH DATA.
       
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  testData(queid:string){
    const id = Number(queid);
    
    console.log
    (this.interviewService.getOne(id-1,this.jsonList));
  }
  ngOnInit() {
 this.getALL();
    
  }

}
