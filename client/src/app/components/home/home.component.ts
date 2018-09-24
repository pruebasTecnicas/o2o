import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  recipes: Array<Recipe>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.apiService.getRecipes().subscribe((data: Array<Recipe>) => {
      this.recipes = data;
    });
  }
}
