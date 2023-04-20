import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Template-Driven Form';
  isTrue: boolean = true;
  name1: any;
  email1: any;
  gender1: any;

  submit(form: NgForm) {
    console.log(form.value);
    this.name1 = form.value.name;
    this.email1 = form.value.email;
    this.gender1 = form.value.gender;
    this.isTrue = false;
  }
}
