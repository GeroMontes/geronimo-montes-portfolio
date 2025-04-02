import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { CommonModule } from '@angular/common';
import { MatrixBackgroundComponent } from "./components/matrix-background/matrix-background.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingBarComponent, CommonModule, MatrixBackgroundComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'static-site';
  showPages: boolean = false;
}
