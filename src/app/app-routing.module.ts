import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'interview',
  children:[
    {
      path:"",
      loadChildren: './interview/interview.module#InterviewPageModule' 
    },
    {
      path:":queId",
      loadChildren: './interview/interview-details/interview-details.module#InterviewDetailsPageModule'
    }
  ]
},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
