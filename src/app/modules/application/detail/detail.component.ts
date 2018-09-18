import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  homeData: any;

  product: number = 0;

  constructor(
    private route: ActivatedRoute,
    dataService: DataService,
  ) {
    dataService.getData('assets/data/home.json').subscribe(data => this.homeData = data)

    console.log(this.homeData)
  }
  
  ngOnInit() {
    // this.route.params.subscribe(params => {

    //   console.log(this.homeData)
    //   this.homeData.forEach(p => {
    //     if (p.id == params.id) {
    //       this.product = p;
    //     }
    //   });
    // });
  }

}
