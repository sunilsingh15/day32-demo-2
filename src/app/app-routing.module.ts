import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { CreateComponent } from './posts/create/create.component';
import { EditComponent } from './posts/edit/edit.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts/home', pathMatch: 'full' },
  { path: 'posts/home', component: PostListComponent },
  { path: 'posts/create', component: CreateComponent },
  { path: 'posts/edit/:postID', component: EditComponent },
  { path: 'posts/details/:postID', component: PostDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
