import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  postForm: FormGroup;

  constructor(private postSvc: PostService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.postForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    })
  }

  createPost() {
    this.postSvc.create(this.postForm.value).subscribe((response: any) => {
      this.router.navigateByUrl('/posts/home');
    })
  }
}
