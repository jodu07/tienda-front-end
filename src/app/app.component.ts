import { Component } from '@angular/core';
import { LoginComponent } from './entry/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [LoginComponent],
})
export class AppComponent {
  title = 'tienda-front-end';
}
