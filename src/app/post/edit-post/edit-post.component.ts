import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.scss"]
})
export class EditPostComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, { validators: [Validators.required, Validators.minLength(10)] }),
      content: new FormControl(null, { validators: [Validators.required, Validators.minLength(10)] }),
      image: new FormControl(null, { validators: [Validators.required, Validators.minLength(10)] })
    });
  }

  onSave(){}
}
