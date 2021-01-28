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
      img: "https://fernandoboza.github.io/angular-dashboard-2/assets/imgOne.jpg"
    },
    {
      title: "Trisha Louis",
      city: "London",
      img: "https://fernandoboza.github.io/angular-dashboard-2/assets/imgTwo.jpg"
    },
    {
      title: "Ana Tomas",
      city: "Miami",
      img: "https://fernandoboza.github.io/angular-dashboard-2/assets/imgThree.jpg"
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
