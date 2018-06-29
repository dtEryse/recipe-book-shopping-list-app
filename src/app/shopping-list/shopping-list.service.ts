import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients : Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredientToAdd: Ingredient) {
    this.ingredients.push(ingredientToAdd);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); // ES6: spread-operator
    // for (let ingredient of ingredients) {
    //   this.ingredients.push(ingredient);
    // }
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
