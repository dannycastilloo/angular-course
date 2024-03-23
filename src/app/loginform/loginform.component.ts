import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {
  display = false;
  toggle() {
    this.display = !this.display;
  }

  getInputData(data: NgForm) {
    console.log(data);
  }
}
