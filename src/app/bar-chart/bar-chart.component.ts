import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { BarServiceService } from '../services/bar-service.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  title = 'angular-chart';
  constructor(private barService:BarServiceService) {
    Chart.register(...registerables);
  }
  ngOnInit(): void {
    this.barService.getAllExpense().subscribe(res => {
      console.log(res[0]);
    })





    // const barCanvasEle: any = document.getElementById('bar_chart')
    // const barChart = new Chart(barCanvasEle.getContext('2d'), {
    //   type: 'bar',
    //     data: {
    //       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //       datasets: [{
    //         label: 'Sales',
    //         data: [65, 59, 80, 81, 56, 55, 40],
    //         backgroundColor: [
    //           'rgba(255, 99, 132, 0.2)',
    //           'rgba(255, 159, 64, 0.2)',
    //           'rgba(255, 205, 86, 0.2)',
    //           'rgba(75, 192, 192, 0.2)',
    //           'rgba(54, 162, 235, 0.2)',
    //           'rgba(153, 102, 255, 0.2)',
    //           'rgba(201, 203, 207, 0.2)'
    //         ],
    //         borderColor: [
    //           'rgb(255, 99, 132)',
    //           'rgb(255, 159, 64)',
    //           'rgb(255, 205, 86)',
    //           'rgb(75, 192, 192)',
    //           'rgb(54, 162, 235)',
    //           'rgb(153, 102, 255)',
    //           'rgb(201, 203, 207)'
    //         ],
    //         borderWidth: 1
    //       }]
    //     },
    //     options: {
    //       responsive: true,
    //       scales: {
    //           y: {
    //               beginAtZero: true
    //           }
    //       }
    //     }
    //   });
    
  }

}
