import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;

  constructor(private postSvc: PostService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  editPost() {

  }
}
