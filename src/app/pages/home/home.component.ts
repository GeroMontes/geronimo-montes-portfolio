import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { WindowCustomComponent } from '../../components/window-custom/window-custom.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, HeaderComponent, WindowCustomComponent],
  standalone: true,
})
export class HomeComponent implements OnInit {
  data: any = [];
  isLoading: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPageData().subscribe((response) => {
      this.data = response;
      this.isLoading = false;
    });
  }

  get listWindows(): Array<any> {
    if (!this.data) return [];

    return [
      {
        id: 'window-0',
        windowTitle: 'Resumen',
        contentText: this.data.info.description,
        contentList: [],
      },
      ...this.data.experience.map((item: any, index: number) => ({
        id: `window-${index + 1}`, // Generamos un id dinámico usando el índice
        windowTitle: 'Experiencia',
        contentText: '',
        contentList: [item],
      })),
      ...this.data.projects.map((item: any, index: number) => ({
        id: `window-${index + this.data.experience.length + 1}`, // Ajustamos el índice para que siga después de las experiencias
        windowTitle: 'Proyectos',
        contentText: '',
        contentList: [item],
      })),
      ...this.data.education.map((item: any, index: number) => ({
        id: `window-${
          index + this.data.experience.length + this.data.projects.length + 1
        }`, // Ajustamos el índice para que siga después de proyectos
        windowTitle: 'Educación',
        contentText: 'Mi formación académica.',
        contentList: [
          {
            title: item.degree,
            company: item.university,
            duration: item.year,
            description: item.description,
          },
        ],
      })),
    ];
  }

  maximizedIndex: number = 1;

  onMaximize(index: number) {
    this.maximizedIndex = index;
  }

  component = ContactComponent;
}
