import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../localstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  previousWeight;
  public chartData: any[];
  isSubmitted= false;
  chartLabels = [];
  public chartColors: any[];
  public chartOptions: any;
  allWeights = [];
  weightInput = '';

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    //let allWeights = [];
    this.previousWeight = this.localStorageService.getLocalStorage();
    this.previousWeight = this.previousWeight.slice(Math.max(this.previousWeight.length - 10));

    for (let weight in this.previousWeight){
      if(this.previousWeight[weight]["weight"]){
        this.chartLabels.push("");
        this.allWeights.push(parseInt(this.previousWeight[weight]["weight"]));
      }
    }

    this.chartData = [
      {data: this.allWeights, label: 'Your Weight Journey'}
    ];

    this.chartOptions = {
      responsive: true
    };

    this.previousWeight = this.previousWeight[Object.keys(this.previousWeight)[Object.keys(this.previousWeight).length - 1]];
    this.previousWeight = this.previousWeight["weight"];
  }

  setWeight(weight): void {
    this.newDataPoint([weight], "");
    this.clearSearch();
    this.localStorageService.storeOnLocalStorage(weight);
    this.isSubmitted = true;
  }

  clearSearch(){
    this.weightInput = null;
  }

  newDataPoint(dataArr, label) {

    this.chartData.forEach((dataset, index) => {
      this.chartData[index] = Object.assign({}, this.chartData[index], {
        data: [...this.chartData[index].data, dataArr[index]]
      });
    });
  
    this.chartLabels = [...this.chartLabels, label];
  
  }

  







}
