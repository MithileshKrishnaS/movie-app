import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css']
})
export class MyhomeComponent implements OnInit {
  movie:any=[];
  list:any=[];
  id:any;
  language:any='';
  constructor( private http:HttpClient, private service:ServiceService ) { 
    this.service.getmovies().subscribe( movie => {
    this.movie=movie;
    for(let i=0;i<this.movie.results.length;i++)
    {
      this.list.push(this.movie.results[i]);
      //console.log(this.list[i])
    }
    })
  }
  abc(id:any)
  {
    console.log('id sent');
    //this.id=id;
    this.service.gotmovieid(id);
  }
 
  setlang()
  {
    //console.log(this.language);
    this.list=[];
    if(this.language=="Portuguese")
    {
      this.service.getlanguage(this.language).subscribe( movie => {
        this.movie=movie;
        for(let i=0;i<this.movie.results.length;i++)
        {
          this.list.push(this.movie.results[i]);
          console.log(this.list[i])
        }
        });
    }
    else if(this.language=="German")
    {
      this.service.getlanguage(this.language).subscribe( movie => {
        this.movie=movie;
        for(let i=0;i<this.movie.results.length;i++)
        {
          this.list.push(this.movie.results[i]);
          console.log(this.list[i])
        }
        });
    }
    else(this.language=="English")
    {
      this.service.getlanguage(this.language).subscribe( movie => {
        this.movie=movie;
        for(let i=0;i<this.movie.results.length;i++)
        {
          this.list.push(this.movie.results[i]);
          console.log(this.list[i])
        }
        });
    }
   
  }

  ngOnInit(): void {
    // this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=6d2c78626225c1e815032b5fe6c1b26d&language=en-US&page=1').subscribe(movie=> {
    //   this.movie=movie;
    //   console.log(this.movie.results);
    // })
  }

}
