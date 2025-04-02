import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { ResumeTabsComponent } from '../../components/resume-tabs/resume-tabs.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ResumeTabsComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data!: any;
  isLoading: boolean = true;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPageData().subscribe((response) => {
      this.data = response;
      this.isLoading = false;
    });
  }

  isDragging = false;
  offsetX = 0;
  offsetY = 0;
  isMinimized = false;

  @ViewChild('resumeWindow') resumeWindow!: ElementRef;

  minimizeWindow() {
    this.isMinimized = true;
  }

  restoreWindow() {
    this.isMinimized = false;
  }

  onMouseDown(event: MouseEvent) {
    if (this.isMinimized) return;
    this.isDragging = true;
    this.offsetX = event.clientX - this.resumeWindow.nativeElement.offsetLeft;
    this.offsetY = event.clientY - this.resumeWindow.nativeElement.offsetTop;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging && !this.isMinimized) {
      this.resumeWindow.nativeElement.style.left = `${
        event.clientX - this.offsetX
      }px`;
      this.resumeWindow.nativeElement.style.top = `${
        event.clientY - this.offsetY
      }px`;
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }
}
