import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-visiteur',
  templateUrl: './visiteur.component.html',
  styleUrls: ['./visiteur.component.scss']
})
export class VisiteurComponent implements OnInit {
  selectedDate: NgbDateStruct;
  date: {year: number, month: number};
  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
  }
  selectToday() {
    this.selectedDate = this.calendar.getToday();
  }


}
