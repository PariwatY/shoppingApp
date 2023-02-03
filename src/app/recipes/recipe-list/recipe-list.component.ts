import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe("Pizza"
      ,"made from thailand"
      ,"https://www.freepnglogos.com/uploads/pizza-png/derwent-park-pizza-5.png"),
    new Recipe("Pizza 02"
      ,"made from thailand 02"
      ,"https://www.freepnglogos.com/uploads/pizza-png/derwent-park-pizza-5.png")
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }



}
