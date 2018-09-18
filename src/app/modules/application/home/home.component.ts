import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeData: any;

  constructor(
    dataService: DataService,
    private ngZone: NgZone
  ) {
    dataService.getData('assets/data/home.json').subscribe(data => this.homeData = data)
  }

  ngOnInit() {
  }

}
