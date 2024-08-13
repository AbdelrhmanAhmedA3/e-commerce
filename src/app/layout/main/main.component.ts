import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingSpinerService } from 'core/services/loading-spiner/loading-spiner.service';
import { FooterComponent } from 'layout/components/footer/footer.component';
import { LoadingSpinnerComponent } from 'shared/components/loading-spinner/loading-spinner.component';
import { HeaderComponent } from 'layout/components/header/header.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, AsyncPipe, LoadingSpinnerComponent, HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',

})
export class MainComponent {
  constructor(public loadingSpiner: LoadingSpinerService) {

  }

  ngOnInit() {

  }


}
