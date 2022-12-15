import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contactenos(value: Partial<{ fullName: string | null; fullLastName: string | null; email: string | null; comments: string | null; }>) {
    throw new Error('Method not implemented.');
  }
  title = 'lentesvision-frontend';
}
