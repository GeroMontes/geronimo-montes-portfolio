import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { ResumeTabsComponent } from '../../components/resume-tabs/resume-tabs.component';
import { HeaderComponent } from '../../components/header/header.component';
import { WindowCustomComponent } from '../../components/window-custom/window-custom.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    ResumeTabsComponent,
    HeaderComponent,
    WindowCustomComponent,
  ],
  standalone: true,
})
export class HomeComponent implements OnInit {
  data!: any;
  isLoading: boolean = true;

  windowTitle: string = 'Resumen';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPageData().subscribe((response) => {
      this.data = response;
      this.isLoading = false;
    });
  }
}
