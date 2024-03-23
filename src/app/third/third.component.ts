import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [],
  template: `
    <p class="custom">
      third works!
    </p>
  `,
  styles: [`
    .custom {
      color: pink;
    }
  `]
})
export class ThirdComponent {

}
