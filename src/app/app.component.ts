import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { SectionComponent } from './section/section.component';
import { StyleComponent } from './style/style.component';
import { NgFor } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { PrivacyComponent } from './privacy/privacy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, RouterOutlet, SignupComponent, LoginformComponent, FirstComponent, SecondComponent, ThirdComponent, SectionComponent, StyleComponent, NavbarComponent, FormsModule, ChildComponent, PrivacyComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /*
  Counter

  count = 0;
  number(type:string) {
    type === 'add' ? this.count++ : this.count--;
  }*/

  data = 10;
  update() {
    this.data = Math.floor(Math.random() * 100);
  }

  inputValue = 'string';

  updateParent(value: string) {
    this.inputValue = value;
  }

  users = ['Name', 'Age', 'Gender', 'Email', 'Profile'];
  detail = [
    {
      name: "John",
      age: 25,
      gender: 'male',
      email: "john@gmail.com",
      profile: "Approved",
    }
  ]
}
