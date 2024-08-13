import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchService } from 'core/services/search/search.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [SearchService]
})
export class AppComponent {
  title = 'e-commerce';
}
