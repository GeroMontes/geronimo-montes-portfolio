// resume-tabs.component.ts
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-resume-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-tabs.component.html',
  styleUrls: ['./resume-tabs.component.css'],
})
export class ResumeTabsComponent {
  activeTab: string = 'experiencia';
  isDragging = false;
  offsetX = 0;
  offsetY = 0;
  isMinimized = true;

  @ViewChild('windowRef') windowRef!: ElementRef;

  changeTab(tab: string) {
    this.activeTab = tab;
  }

  minimizeWindow() {
    this.isMinimized = true;
  }

  restoreWindow() {
    this.isMinimized = false;
  }

  onMouseDown(event: MouseEvent) {
    if (this.isMinimized) return; // No permitir mover si está minimizado
    this.isDragging = true;
    this.offsetX = event.clientX - this.windowRef.nativeElement.offsetLeft;
    this.offsetY = event.clientY - this.windowRef.nativeElement.offsetTop;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging && !this.isMinimized) {
      this.windowRef.nativeElement.style.left = `${
        event.clientX - this.offsetX
      }px`;
      this.windowRef.nativeElement.style.top = `${
        event.clientY - this.offsetY
      }px`;
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }
}
