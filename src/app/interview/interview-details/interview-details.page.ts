import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterviewService } from '../interview.service';
import { Question } from '../interview.model';

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.page.html',
  styleUrls: ['./interview-details.page.scss'],
})
export class InterviewDetailsPage implements OnInit {

  question:Question;
  jsonList:Question[];
  constructor(private activatedRoute : ActivatedRoute , private interviewService:InterviewService ) { }
  public getALL(id:number){
    this.interviewService.getAllQuestions().subscribe(
      data => {
       this.jsonList = data as Question [];	 // FILL THE ARRAY WITH DATA.
       this.question = this.jsonList[id-1];
      }
    );
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap =>{
        if(!paramMap.has('queId'))
        {
          return;
        }
        const queId = paramMap.get('queId');
        this.getALL(Number(queId));

       

      }
    )
  }

}
