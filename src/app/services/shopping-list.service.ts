import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 10)
  ];
  itemAdded = new EventEmitter();

  constructor() { }

  addItem(data: Ingredient) {
    this.ingredients.push(data);
    this.itemAdded.emit();
  }

  getIngredients() {
    return this.ingredients.slice();
  }
}