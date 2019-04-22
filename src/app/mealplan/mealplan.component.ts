import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mealplan',
  templateUrl: './mealplan.component.html',
  styleUrls: ['./mealplan.component.css']
})
export class MealplanComponent implements OnInit {

  pictures = [];
  titles = [];
  descriptions = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMeals().subscribe((res) => {
      console.log(res[0]);
 
      for (let obj in res){
         this.titles.push(res[obj].recipe)
         this.pictures.push(res[obj].picture)
         this.descriptions.push(res[obj].desc)
      }
    });
  }

  


}
