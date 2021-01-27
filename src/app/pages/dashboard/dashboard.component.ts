import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  cardDeck = [
    {
      title: "Niketa William",
      city: "Paris",
      img: "../../../assets/Artboard 1 copy 2@2x.jpg"
    },
    {
      title: "Trisha Louis",
      city: "London",
      img: "../../../assets/Artboard 1 copy@2x.jpg"
    },
    {
      title: "Ana Tomas",
      city: "Miami",
      img: "../../../assets/Artboard 1@2x.jpg"
    },
  ];

  monthObj: any;

  getDaysInMonth = (month = new Date().getMonth(), year = new Date().getFullYear()) => {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      let d = new Date(date);
      days.push({
        dayName: d.toLocaleString('en-us', { weekday: 'short' }),
        dayNum: d.getDate(),

      });
      date.setDate(date.getDate() + 1);
    }
    return days;
  }



  ngOnInit(): void {
    this.monthObj = this.getDaysInMonth();
  }

}
