import {Injectable} from '@angular/core';
import {Menu, StaticMenu} from './menu';

@Injectable()
export class ProductRepository {
  private menu: Menu[] = [];
  private categories: string[] = [];

  constructor(private dataSource: StaticMenu) {
    dataSource.getMenu().subscribe(data => {
      this.menu = data;
      this.categories = data.map(p => p.nameCategory)
        .filter((c, index, array) => array.indexOf(c) === index).sort();
    });
  }

  getMenus(category: string = null): Menu[] {
    return this.menu
      .filter(p => category == null || category === p.nameCategory);
  }

  // getMenu(id: number): Menu {
  //   return this.menu.find(p => p.id === id);
  // }
  //
  // getCategories(): string[] {
  //   return this.categories;
  // }
}
