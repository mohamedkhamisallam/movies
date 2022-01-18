import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 x:any;
 term:any;
  click (eventInfo:any)
  {
    this.x=eventInfo.target.outerText;
    this.getAll(this.x)
    
  }


 

  constructor(private _MoviesService:MoviesService) { 
    
  }
trendingMovies:any[]=[];
trendingTv:any[]=[];
trendingActors:any[]=[];


imgPrefix:string=`https://image.tmdb.org/t/p/w500`
  ngOnInit(): void {

    this._MoviesService.getTrending(`movie`).subscribe((respone)=>{

this.trendingMovies=respone.results
    })
    // this._MoviesService.getTrending(`tv`).subscribe((respone)=>{

    //   this.trendingTv=respone.results
    //       })
    //       this._MoviesService.getTrending(`people`).subscribe((respone)=>{

    //         this.trendingActors=respone.results
    //             })

  



        

  }
  
  getAll(x:any)
  {

    this._MoviesService.getTrending(x).subscribe((res)=>{
      this.trendingMovies=res.results

    })



  }
  

}
