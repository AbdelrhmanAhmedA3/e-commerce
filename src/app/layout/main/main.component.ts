import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'layout/components/footer/footer.component';
import { HeaderComponent } from 'layout/components/header/header.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
