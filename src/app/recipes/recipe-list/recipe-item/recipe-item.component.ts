import { Recipe } from './../../../shared/recipe.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe = new Recipe("","","");

  constructor() { 
    
  }

  @Output() recipeSelected:EventEmitter<Recipe> = new EventEmitter<Recipe>();
  
  ngOnInit(): void {
  }
  onSelected(){
    this.recipeSelected.emit();
  }
}
