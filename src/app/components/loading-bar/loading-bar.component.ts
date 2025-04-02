import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  standalone: true,
  imports: [],
  templateUrl: './loading-bar.component.html',
  styleUrl: './loading-bar.component.css',
})
export class LoadingBarComponent {
  @Output() loadingComplete: EventEmitter<boolean> = new EventEmitter();

  currentMessage = 'Cargando...';
  progress = 0;
  loadedFiles = 0;
  totalFiles = 10;

  private ctx!: CanvasRenderingContext2D;
  private columns!: number;
  private drops!: number[];
  private fontSize = 16;

  ngOnInit(): void {
    this.simulateLoading();
  }

  private simulateLoading() {
    const interval = setInterval(() => {
      if (this.loadedFiles < this.totalFiles) {
        this.loadedFiles++;
        this.progress = (this.loadedFiles / this.totalFiles) * 100;
      } else {
        clearInterval(interval);
        this.loadingComplete.emit(true);
      }
    }, 500);
  }
}
