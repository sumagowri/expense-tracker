import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { BarServiceService } from '../services/bar-service.service';
import { ExpenseModel } from '../model/expense-model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  title = 'angular-chart';
  expenseModel:ExpenseModel[] =[];
  barCanvasEle:any ;

  constructor(private barService:BarServiceService, private datePipe:DatePipe) {
    Chart.register(...registerables);
  }
  
  
  ngOnInit(): void {
    this.barService.getAllExpense().subscribe(res => {
      // console.log(res.ammount);
      let dates =[];
      let amount = [];
      this.expenseModel = res;
      for(let i=0;i<res.length;i++){
        const date = this.datePipe.transform(this.expenseModel[i].spent_on, 'dd-MM-yyyy')
        dates[i] = date;
        amount[i] = this.expenseModel[i].ammount;
        // console.log(res[i].ammount)
      }
      this.createChart(dates,amount);
    })    
  }

  createChart( dates:any,amount:any):void{
    this.barCanvasEle = document.getElementById('bar_chart')
    const barChart = new Chart(this.barCanvasEle.getContext('2d'), {
      type:'bar',
      data:{
        labels:dates,
        datasets:[{
            label:'Spent',
            data:amount,
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }

}
