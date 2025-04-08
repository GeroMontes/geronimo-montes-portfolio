import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  Type,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { NgComponentOutlet } from '@angular/common'; // Importa el NgComponentOutlet

@Component({
  selector: 'app-window-custom',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  template: `
    <div
      *ngIf="isMaximized"
      [id]="index"
      #windowElement
      class="select-none absolute top-1/5 left-1/2 transform -translate-x-1/2 bg-green-800 bg-opacity-80 text-white border-4 border-green-600 rounded-lg cursor-grab transition-all duration-300 ease-in-out w-11/12 h-3/5"
      (mousedown)="onMouseDown($event)"
    >
      <div
        class="window-header bg-green-700 p-2 flex justify-between items-center rounded-t-lg cursor-grab"
      >
        <h1 class="text-2xl font-extrabold">{{ windowTitle }}</h1>
        <div class="flex gap-2">
          <div
            class="bg-red-800 w-6 h-6 rounded-full cursor-pointer border-white border-2"
            (click)="close()"
          ></div>
          <div
            class="bg-yellow-800 w-6 h-6 rounded-full cursor-pointer border-white border-2"
            (click)="minimize()"
          ></div>
          <div
            class="bg-green-800 w-6 h-6 rounded-full cursor-pointer border-white border-2"
            (click)="isMaximized ? restore() : maximize()"
          ></div>
        </div>
      </div>

      <div class="p-10 space-y-6">
        <p class="text-green-300">{{ contentText }}</p>

        <!-- Usar ng-container y ngComponentOutlet para renderizar el componente dinámico -->
        <ng-container *ngIf="dynamicComponent">
          <ng-container
            *ngComponentOutlet="
              dynamicComponent;
              injector: dynamicComponentInjector
            "
          ></ng-container>
        </ng-container>
      </div>
    </div>

    <button
      *ngIf="!isMaximized"
      class="restore-btn fixed bottom-28 transform -translate-x-1/2 bg-green-700 text-white p-2 rounded-md cursor-pointer font-bold transition-colors duration-300 hover:bg-green-500 w-[200px]"
      [style.left.px]="index * 220"
      (click)="restore()"
    >
      {{ windowTitle }}
    </button>
  `,
  styles: `
  /* Ventana en estado normal */
.app-window-custom {
    position: absolute;
    transition: top 0.3s ease-in-out, left 0.3s ease-in-out;
  }
  
  /* Estilo para las ventanas cuando están minimizadas */
  .restore-btn {
    transition: top 0.3s ease-in-out, left 0.3s ease-in-out;
  }
  `,
})
export class WindowCustomComponent {
  @Input() isMaximized!: boolean;
  @Input() index!: number;
  @Input() windowTitle: string = '';
  @Input() contentText: string = '';
  @Input() contentList: any[] = [];
  @Input() dynamicComponent: Type<any> | null = null; // Componente dinámico a mostrar
  @Output() closeWindow = new EventEmitter<void>();
  @Output() maximizeWindow = new EventEmitter<number>();

  dynamicComponentInjector: any;

  isDragging = false;

  offsetX = 0;
  offsetY = 0;

  minimizedPositionTop = 100;
  minimizedPositionLeft = 100;

  private minimizedWindows: { top: number; left: number }[] = [];

  @ViewChild('windowElement') windowElement!: ElementRef;

  onMouseDown(event: MouseEvent) {
    if (!this.isMaximized) return;
    this.isDragging = true;
    this.offsetX = event.clientX - this.windowElement.nativeElement.offsetLeft;
    this.offsetY = event.clientY - this.windowElement.nativeElement.offsetTop;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging && this.isMaximized) {
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
    this.isMaximized = false;
    this.minimizedWindows.push({
      top: this.minimizedPositionTop,
      left: this.minimizedPositionLeft,
    });
    this.minimizedPositionTop += 50;
    this.minimizedPositionLeft += 50;
  }

  restore(): void {
    this.isMaximized = true;
    this.maximizeWindow.emit(this.index); // Primero notifica al padre
  }

  maximize(): void {
    this.isMaximized = true;
    this.maximizeWindow.emit(this.index); // Primero notifica al padre

    const window = this.windowElement.nativeElement;
    window.style.top = '0';
    window.style.left = '0';
    window.style.width = '100%';
    window.style.height = '100vh';
  }

  close(): void {
    this.closeWindow.emit();
  }
}
