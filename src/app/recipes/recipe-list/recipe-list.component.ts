import { Recipe } from './../../shared/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test name','test description','https://pinchofyum.com/wp-content/uploads/Mushroom-Fettuccine-1-2.jpg'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
