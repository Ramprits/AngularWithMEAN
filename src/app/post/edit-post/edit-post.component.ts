import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  @Output() addPostEventEmmiter = new EventEmitter();
  form: FormGroup;
  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', { validators: [Validators.required, Validators.minLength(10)] }),
      content: new FormControl('', { validators: [Validators.required, Validators.minLength(10)] })
    });
  }

  onSave(data: any) {
    this.addPostEventEmmiter.emit(data);
    this.form.reset();
  }
}
