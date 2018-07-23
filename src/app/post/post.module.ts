import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { SharedModule } from '@app/shared';
import { TranslateModule } from '@ngx-translate/core';
import { PostRoutes, EditPostComponent } from '@app/post';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, SharedModule, TranslateModule, HttpClientModule, PostRoutes, ReactiveFormsModule],
  declarations: [PostComponent, EditPostComponent]
})
export class PostModule {}
