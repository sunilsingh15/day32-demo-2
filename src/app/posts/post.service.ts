import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL: string = "http://localhost:3000/posts";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Post[]>(this.apiURL);
  }

  getByID(id: number) {
    return this.http.get<Post>(this.apiURL + `/${id}`);
  }

  create(post: Post) {
    return this.http.post<Post>(this.apiURL, post, this.httpOptions);
  }

  update(id: number, post: Post) {
    return this.http.put<Post>(this.apiURL + `/${id}`, post, this.httpOptions);
  }

  delete(id: number) {
    return this.http.delete<Post>(this.apiURL + `/${id}`, this.httpOptions);
  }
 }
