import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes:Recipe[] = [
    new Recipe("Pizza"
      ,"made from thailand"
      ,"https://www.freepnglogos.com/uploads/pizza-png/derwent-park-pizza-5.png"),
    new Recipe("Pizza"
      ,"made from thailand"
      ,"https://www.freepnglogos.com/uploads/pizza-png/derwent-park-pizza-5.png")
  ];



  constructor() {
  }

  ngOnInit(): void {
  }



}
