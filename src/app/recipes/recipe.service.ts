import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../shared/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected:EventEmitter<Recipe> = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Dish made with pork or chicken.',
      'https://www.simplyrecipes.com/thmb/gDbjzvfKSRH1w4GRsKtOtnvXHAU=/3900x2194/smart/filters:no_upscale()/Simply-Recipes-Pork-Schnitzel-LEAD-3-e36c4502197641ecbbe1fdcd0c4760c7.jpg',
      [
        new Ingredient("chicken",1),
        new Ingredient("BreadCrumb",1),
        new Ingredient("Eggs",2),
      ]
    ),
    new Recipe(
      'Paella',
      'A rice dish made with many seafood and saffron',
      'https://silveroak.com/wp-content/uploads/2020/02/Recipe-Seafood-Paella.jpg',
      [
        new Ingredient("rice",1),
        new Ingredient("prawns",6),
        new Ingredient("saffron",2),
      ]
    ),
  ];
  constructor(private shoppingListService:ShoppingListService) {}

  getRecipes():Recipe[]{
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
