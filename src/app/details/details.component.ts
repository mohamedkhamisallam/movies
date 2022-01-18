import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  id:any;
  moviedetails:any={};
  language:any=[];
  
  countries:any=[]
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`

  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService) { 
 
  }

  ngOnInit(): void {

    this.id= this._ActivatedRoute.snapshot.params.id;
    this._MoviesService.getdetails(this.id).subscribe((response)=>{

     this.moviedetails=response;
     this.language=response.spoken_languages;
     this.countries=response.production_countries
    

    })
  }

  

}
