import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
}
