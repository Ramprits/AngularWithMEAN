import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from '@app/post/post.model';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  constructor(private _http: HttpClient) {}

  getPosts() {
    return this._http.get<{ message: string; posts: Post[] }>(`/api/posts`).subscribe(
      postData => {
        this.posts = postData.posts;
        this.postUpdated.next([...this.posts]);
        console.log(postData.message);
      },
      error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status == 404) {
            console.error("Post doesn't found with status code : ", error.status);
          }
        }
      },
      () => {
        console.log('Finally loadded post');
      }
    );
  }

  getPostUpdatedListener() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { id: null, title: title, content: content };
    return this._http.post<{ message: string }>('/api/posts', post).subscribe(responseData => {
      this.posts.push(post);
      this.postUpdated.next([...this.posts]);
      console.log(responseData.message);
    });
  }
}
