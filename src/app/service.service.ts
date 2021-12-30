import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  second="=en-US&page=1";
  movie="https://api.themoviedb.org/3/movie/";
  api="/videos?api_key=6d2c78626225c1e815032b5fe6c1b26d&language";
  key="?api_key=6d2c78626225c1e815032b5fe6c1b26d&"
  id:number=0;

  constructor(private http:HttpClient) { }
  //id=this.home.id;
  // getmoviess()
  // {
  //   this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=6d2c78626225c1e815032b5fe6c1b26d&language=en-US&page=1').subscribe(movie=> {
  //     this.movie=movie;
  //     //console.log(this.movie.results);
  //     //console.log(movie)
  //     return movie;
  //   })
  // }

  getmovies()
  {
    const first="https://api.themoviedb.org/3/movie/now_playing?api_key=6d2c78626225c1e815032b5fe6c1b26d&language";
    
    const url="https://api.themoviedb.org/3/movie/now_playing?api_key=6d2c78626225c1e815032b5fe6c1b26d&language=en-US&page=1";
    console.log(first+this.second);
    return this.http.get(first+this.second);
  }

  getlanguage(lang:any)
  {
    if(lang==="Portuguese")
    {
      this.second="=pt-BR&page=1";
      
      //console.log(this.second)
    }
    if(lang==="English")
    {
      this.second="=en-US&page=1"
    }
    if(lang==="German")
    {
      this.second="=de&page=1"
    }
    return this.getmovies();
  }

  gotmovieid(id:any)
  {
    
    this.id=id;
    
  }

  getmovieid()
  {
   // console.log('id :'+this.id);
    return this.http.get(this.movie+this.id+this.api+this.second);
  }

  getdetails(){
    console.log(this.movie+this.id+this.key)
    return this.http.get(this.movie+this.id+this.key+'append_to_response=credits');
  }
}
