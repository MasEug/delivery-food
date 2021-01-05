import { Component } from '@angular/core';
import {ProductRepository} from '../../models/menu.repository';
import {Menu} from '../../models/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  hoveredIndex: number = null;
  clickedIndex: number = null;

  constructor(private repository: ProductRepository) { }

  get menu(): Menu[] {
    return this.repository.getMenus();
  }

}
