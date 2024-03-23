import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
  color = 'blue';
  bgcolor = 'white';
  @Input() value = 0;

  getColor() {
    this.color = "red";
    this.bgcolor = "gray";
  }
}