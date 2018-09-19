import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as _ from 'lodash';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // datas master
  datas: Array<any>;

  // dropdown Duration
  dropdownDuration: Array<any>;

  // dropdown Duration value
  dropdownDurationActive: any;

  // list processing home
  listProgress: Array<any>;

  // Total Conflicts
  TotalConflicts: number;

  // Records Auto-Processed
  RecordsAutoProcessed: number;

  // Manual Intervention Needed
  ManualInterventionNeeded: number;

  // Auto Rate
  AutoRate: number;

  // select all records home
  selectedAll: any;

  // protessing records home
  processing: any;

  // start protessing records home
  starting: any = true;
  
  // text MS error load json
  errorMessage: string;


  // sortByColumn
  sortByColumn: string;
  isAscOrder: boolean;

  constructor(
    private dataService: DataService,   //data service
    private router: Router
  ) {}

  ngOnInit() {
    this.onload();  // onload page
  }

  // action select dropdown
  action(e): void {}


  // load data services
  onload = (): void => {
    this.dataService.getData('assets/data/home.json').subscribe(
      data => {
        // data master
        this.datas = data;

        // Total Conflicts
        this.TotalConflicts = data['Total Conflicts']

        // Records Auto-Processed
        this.RecordsAutoProcessed = data['Records Auto-Processed']

        // Manual Intervention Needed
        this.ManualInterventionNeeded = data['Manual Intervention Needed']

        // Auto-Rat
        this.AutoRate = data['Auto-Rate']

        
      },
      error => this.errorMessage = <any>error,
      () => this.loadData(this.datas)
    );
  }

  loadData(json: any){
    // dropdown Duration
    this.dropdownDuration = json['List Duration'];

    // list Progress
    this.listProgress = json['List Progress'];

    console.log(this.listProgress)

    // active value dropdown Duration
    this.dropdownDurationActive = json['List Duration'][0].value;

    // set starting record by status
    for (var i = 0; i < this.listProgress.length; i++) {
      if (this.listProgress[i]['Status'] === 'Not Processed'){
        this.listProgress[i]['starting'] = true;
      }
      this.listProgress[i]['Show'] = false;
    }
    
  }

  // function select All record
  selectAll() {
    for (var i = 0; i < this.listProgress.length; i++) {
      this.listProgress[i].selected = this.selectedAll;
    }
  }
  // function select this record
  checkIfAllSelected() {
    this.selectedAll = this.listProgress.every(function(item:any) {
        return item.selected == true;
      })
  }

  // function progressing All record
  progressAll() {
    for (var i = 0; i < this.listProgress.length; i++) {
      this.isProcessing(i);
    }
  }

  // function progressing this record
  isProcessing(i: any) {
    this.listProgress[i].processing = true;
    this.listProgress[i]['starting'] = false;

    setTimeout(() => {
      this.listProgress[i].processing = false;
      
      if (this.listProgress[i]['Status'] === 'Not Processed'){
        this.listProgress[i]['Status'] = 'Completed';
      }      
    }, 1000);
  }

  // show detail record
  isShowView(i: any) {    
    if (this.listProgress[i]['Show']){
      this.listProgress[i]['Show'] = false;
    }
    else{
      this.listProgress[i]['Show'] = true;
    }
  }

  goReview(){
    this.router.navigate(['review']);
  }

  // sort data when click on column
  sortData(column) {
    this.sortByColumn = column;
    this.isAscOrder = !this.isAscOrder;
    this.listProgress = _.orderBy(this.listProgress, [column], [this.isAscOrder ? 'asc' : 'desc']);
  }
  
}
