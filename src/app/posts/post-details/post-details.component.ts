import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postObject: Post = {
    id: 0,
    title: '',
    body: ''
  }

  constructor(private postSvc: PostService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('postID'));

      this.postSvc.getByID(id).subscribe((data) => {
        this.postObject = data;
      })
    })
  }

}
