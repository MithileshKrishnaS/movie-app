import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-mymovie',
  templateUrl: './mymovie.component.html',
  styleUrls: ['./mymovie.component.css']
})
export class MymovieComponent implements OnInit {
  movie:any;
  details:any;
  url:any='';
  cast:any=[];
  constructor( private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getmovieid().subscribe( movie => {
      this.movie=movie;
    console.log(this.movie.results[0].key);
    this.url='https://www.youtube.com/embed/'+this.movie.results[0].key;
  })
  this.service.getdetails().subscribe( details => {
    this.details=details;
  // console.log(this.details.credits.cast);
  for(let i=0;i<13;i++)
    {
      this.cast.push(this.details.credits.cast[i])
    }
  })
  }

}
