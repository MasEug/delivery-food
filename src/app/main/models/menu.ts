import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

export class DishSub {
  constructor(
    public name: string,
    public nameSvg: string,
  ) {}
}

export class Menu {
  constructor(
    public id: number,
    public name: string,
    public nameSvg: string,
    public nameCategory: string,
    public dishSub: DishSub[]
  ) {}
}

@Injectable()
export class StaticMenu {
  private menu: Menu[] = [
    new Menu(1, 'foods', 'foods', 'dishFood', [
      new DishSub('chicken', 'chicken'), new DishSub('sea food', 'shrimp'),
      new DishSub('pizza', 'pizza'), new DishSub('pasta', 'pasta')]),
    new Menu(2, 'drinks', 'drinks', 'dishDrinks', [
        new DishSub('coffee', 'coffee'), new DishSub('tea', 'tea'),
        new DishSub('juice', 'juice'), new DishSub('water', 'water')]),
    new Menu(3, 'snack', 'snack', 'dishSnack', []),
    new Menu(4, 'desert', 'desserts', 'dishDesserts', []),
    new Menu(5, 'package', 'package', 'dishPackages', [])
  ];

  getMenu(): Observable<Menu[]> {
    return new Observable(l => {
      setTimeout(() => {
        l.next(this.menu);
      }, 100);
    });
  }
}
