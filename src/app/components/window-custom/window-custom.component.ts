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
} from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-window-custom',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  template: `
    <div
      *ngIf="isMaximized"
      [id]="index"
      #windowElement
      class="select-none absolute top-1/5 left-1/2 transform -translate-x-1/2 bg-green-800 bg-opacity-80 text-white border-4 border-green-600 rounded-lg cursor-grab transition-all duration-300 ease-in-out w-11/12 h-3/5 overflow-hidden"
    >
      <div
        class="window-header bg-green-700 p-2 flex justify-between items-center rounded-t-lg cursor-grab"
        (mousedown)="onMouseDown($event)"
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

        <ng-container *ngIf="dynamicComponent">
          <ng-container
            *ngComponentOutlet="dynamicComponent; injector: dynamicComponentInjector"
          ></ng-container>
        </ng-container>
      </div>

      <!-- Resizers: solo orillas -->
      <div class="absolute top-0 left-0 w-full h-1 cursor-n-resize" (mousedown)="initResize($event, 'top')"></div>
      <div class="absolute bottom-0 left-0 w-full h-1 cursor-s-resize" (mousedown)="initResize($event, 'bottom')"></div>
      <div class="absolute top-0 left-0 h-full w-1 cursor-w-resize" (mousedown)="initResize($event, 'left')"></div>
      <div class="absolute top-0 right-0 h-full w-1 cursor-e-resize" (mousedown)="initResize($event, 'right')"></div>
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
})
export class WindowCustomComponent {
  @Input() isMaximized!: boolean;
  @Input() index!: number;
  @Input() windowTitle: string = '';
  @Input() contentText: string = '';
  @Input() contentList: any[] = [];
  @Input() dynamicComponent: Type<any> | null = null;
  @Output() closeWindow = new EventEmitter<void>();
  @Output() maximizeWindow = new EventEmitter<number>();

  dynamicComponentInjector: any;

  isDragging = false;
  offsetX = 0;
  offsetY = 0;

  private resizing = false;
  private resizeDirection = '';

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
      this.windowElement.nativeElement.style.left = `${event.clientX - this.offsetX}px`;
      this.windowElement.nativeElement.style.top = `${event.clientY - this.offsetY}px`;
    }

    if (this.resizing) this.performResize(event);
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
    this.stopResize();
  }

  minimize(): void {
    this.isMaximized = false;
  }

  restore(): void {
    this.isMaximized = true;
    this.maximizeWindow.emit(this.index);
  }

  maximize(): void {
    this.isMaximized = true;
    this.maximizeWindow.emit(this.index);
    const window = this.windowElement.nativeElement;
    window.style.top = '0';
    window.style.left = '0';
    window.style.width = '100%';
    window.style.height = '100vh';
  }

  close(): void {
    this.closeWindow.emit();
  }

  initResize(event: MouseEvent, direction: string) {
    event.stopPropagation();
    event.preventDefault();
    this.resizing = true;
    this.resizeDirection = direction;
  }

  performResize(event: MouseEvent) {
    const el = this.windowElement.nativeElement;
    const rect = el.getBoundingClientRect();

    switch (this.resizeDirection) {
      case 'right':
        el.style.width = event.clientX - rect.left + 'px';
        break;
      case 'left':
        const newWidthLeft = rect.right - event.clientX;
        el.style.width = newWidthLeft + 'px';
        el.style.left = event.clientX + 'px';
        break;
      case 'bottom':
        el.style.height = event.clientY - rect.top + 'px';
        break;
      case 'top':
        const newHeightTop = rect.bottom - event.clientY;
        el.style.height = newHeightTop + 'px';
        el.style.top = event.clientY + 'px';
        break;
    }
  }

  stopResize() {
    this.resizing = false;
    this.resizeDirection = '';
  }
}
