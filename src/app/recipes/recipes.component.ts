import { Recipe } from './../shared/recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @Input() selectedRecipe: Recipe = new Recipe("","","");
  constructor() { }

  ngOnInit(): void {
  }
  
}
