import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static:true}) nameInput?: ElementRef;
  @ViewChild('amountInput', {static:true}) amountInput?: ElementRef;

  @Output()  ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const ingName = this.nameInput?.nativeElement.value;
    const ingAmount = this.amountInput?.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.ingredientAdded.emit(newIngredient);


  }

}
