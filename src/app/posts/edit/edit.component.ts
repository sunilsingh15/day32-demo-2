import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;

  postObject: Post = {
    id: 0,
    title: '',
    body: ''
  }

  constructor(private postSvc: PostService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      title: [this.postObject.title, Validators.required],
      body: [this.postObject.body, Validators.required]
    });

    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('postID'));
      this.getPostByID(id);
    })
  }

  getPostByID(id: number) {
    this.postSvc.getByID(id).subscribe((data) => {
      this.postObject = data;
    })
  }

  update() {
    this.postSvc.update(this.postObject.id, this.postObject).subscribe({
      next: (data) => {
        this.router.navigate(['/posts/home']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
