import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-window-custom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './window-custom.component.html',
  styleUrl: './window-custom.component.css',
})
export class WindowCustomComponent {
  @Input() windowTitle: string = '';
  @Input() contentTitle: string = '';
  @Input() contentText: string = '';
  @Input() contentList: any[] = []; // Para manejar experiencia, proyectos y educación
  @Output() closeWindow = new EventEmitter<void>();
  @Output() minimizeWindow = new EventEmitter<void>();

  isDragging = false;
  isMinimized = false;
  isMaximized = false;

  offsetX = 0;
  offsetY = 0;

  // Posición inicial de la ventana minimizada
  minimizedPositionTop = 100;
  minimizedPositionLeft = 100;

  // Contenedor para las posiciones de ventanas minimizadas
  private minimizedWindows: { top: number, left: number }[] = [];

  @ViewChild('windowElement') windowElement!: ElementRef;

  onMouseDown(event: MouseEvent) {
    if (this.isMinimized) return; // No permitir mover si está minimizado
    this.isDragging = true;
    this.offsetX = event.clientX - this.windowElement.nativeElement.offsetLeft;
    this.offsetY = event.clientY - this.windowElement.nativeElement.offsetTop;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging && !this.isMinimized) {
      this.windowElement.nativeElement.style.left = `${
        event.clientX - this.offsetX
      }px`;
      this.windowElement.nativeElement.style.top = `${
        event.clientY - this.offsetY
      }px`;
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

  minimize(): void {
    this.isMinimized = true;
    // Guardamos la posición minimizada
    this.minimizedWindows.push({ top: this.minimizedPositionTop, left: this.minimizedPositionLeft });
    // Actualizamos la posición para la próxima ventana minimizada
    this.minimizedPositionTop += 50;
    this.minimizedPositionLeft += 50;
    this.minimizeWindow.emit();
  }

  restore(): void {
    this.isMinimized = false;
    this.isMaximized = false;
  }

  maximize(): void {
    this.isMaximized = true; // Maximiza la ventana
    const window = this.windowElement.nativeElement;
    window.style.top = '0'; // Coloca la ventana en la parte superior
    window.style.left = '0'; // Coloca la ventana a la izquierda
    window.style.width = '100%'; // Ajusta el ancho a 100%
    window.style.height = '100vh'; // Ajusta la altura a 100vh
  }

  close(): void {
    this.closeWindow.emit();
  }
}
