import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  @ViewChild('myCanvas') canvas: any;

  lineChartData: ChartDataSets[] = [
    { data: [3, 4, 3, 5, 2, 3], label: '' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    legend: { display: false },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true,
          display: false
        },
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          display: false
        },
        gridLines: {
          display: false
        }
      }]
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 5
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(255, 99, 132, 0.8)');
    gradient.addColorStop(0, 'rgba(255, 99, 132, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 99, 132, 0)');
    this.lineChartColors = [
      {
        backgroundColor: gradient
      }
    ];
  }
}


