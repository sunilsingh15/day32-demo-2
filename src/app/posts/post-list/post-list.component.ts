import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postSvc: PostService) { }

  ngOnInit(): void {
    this.postSvc.getAll().subscribe((data : Post[]) => {
      this.posts = data;
    })
  }

  deletePost(id: number) {
    this.postSvc.delete(id).subscribe((response: any) => {
      this.posts = this.posts.filter(p => p.id != id)
    })
  }

}
