import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients : Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredientToAdd: Ingredient) {
    this.ingredients.push(ingredientToAdd);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); // ES6: spread-operator
    // for (let ingredient of ingredients) {
    //   this.ingredients.push(ingredient);
    // }
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
