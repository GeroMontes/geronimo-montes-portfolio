import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  standalone: true,
  imports: [],
  templateUrl: './loading-bar.component.html',
  styleUrl: './loading-bar.component.css',
})
export class LoadingBarComponent {
  @Output() loadingComplete: EventEmitter<boolean> = new EventEmitter();

  progress = 0;
  loadedFiles = 0;
  totalFiles = 6; // Reducimos a 6 secciones de carga
  loadingMessages = [
    'Cargando perfil...',
    'Cargando habilidades...',
    'Cargando proyectos...',
    'Cargando experiencia...',
    'Build develop profile...',
    'Success...',
  ];
  currentMessage = this.loadingMessages[0];

  constructor() {
    this.loadFiles();
  }

  loadFiles() {
    const interval = setInterval(() => {
      if (this.loadedFiles < this.totalFiles) {
        this.loadedFiles++;
        this.progress = (this.loadedFiles / this.totalFiles) * 100;
        this.currentMessage =
          this.loadingMessages[this.loadedFiles] || 'Listo!';
      } else {
        clearInterval(interval);
        this.loadingComplete.emit(true);
      }
    }, 1000); // Simula un tiempo de carga
  }

  ngAfterViewInit() {
    this.startMatrixEffect();
  }

  startMatrixEffect() {
    const canvas = document.getElementById('matrixCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(0);

    function drawMatrix() {
      ctx.fillStyle = 'rgba(0, 0, 0, .05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff00'; // Verde neón
      ctx.font = '20px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(33 + Math.random() * 94);
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    setInterval(drawMatrix, 50);
  }
}
