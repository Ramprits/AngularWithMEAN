import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '@app/post';
import { Subscription } from 'rxjs';
import { PostService } from '@app/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(private _ps: PostService) {}

  ngOnInit() {
    this._ps.getPosts();
    this.postsSub = this._ps.getPostUpdatedListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
  onSave(formData: any) {
    this._ps.addPost(formData.title, formData.content);
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
