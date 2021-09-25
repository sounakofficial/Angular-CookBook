import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient("cumin",5),
    new Ingredient("tomato",6)
  ]

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() { }

  getIngredients():Ingredient[]{
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
