import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css'],
})
export class CafeListComponent implements OnInit {
  cafes: Array<Cafe> = [];
  seasonsAverage: number = 0;

  constructor(private cafeService: CafeService) {}

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      //this.totalCafes = this.total();
    });
  }

  ngOnInit() {
    this.getCafes();
  }


}
