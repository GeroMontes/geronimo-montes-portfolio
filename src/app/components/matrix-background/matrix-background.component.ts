import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-matrix-background',
  standalone: true,
  templateUrl: './matrix-background.component.html',
  styleUrls: ['./matrix-background.component.css'],
})
export class MatrixBackgroundComponent implements OnInit {
  @ViewChild('matrixCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private columns!: number;
  private drops!: number[];
  private fontSize = 16;

  ngOnInit(): void {
    this.setupCanvas();
    this.animateMatrix();
  }

  @HostListener('window:resize')
  onResize() {
    this.setupCanvas();
  }

  private setupCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    this.columns = Math.floor(canvas.width / this.fontSize);
    this.drops = Array(this.columns).fill(1);
  }

  private animateMatrix() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const draw = () => {
      const canvas = this.canvasRef.nativeElement;
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      this.ctx.fillRect(0, 0, canvas.width, canvas.height);

      this.ctx.fillStyle = '#0f0';
      this.ctx.font = `${this.fontSize}px monospace`;

      for (let i = 0; i < this.drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const x = i * this.fontSize;
        const y = this.drops[i] * this.fontSize;

        this.ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          this.drops[i] = 0;
        }
        this.drops[i]++;
      }

      requestAnimationFrame(draw);
    };
    draw();
  }
}
