import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {FormGroup, FormControl} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';

export interface Dessert {
  icon: string;
  name: string;
  size: string;
  type: string;
  modified: any;
  // action: number;
}
export interface FilterVal {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-info-step4',
  templateUrl: './info-step4.component.html',
  styleUrls: ['./info-step4.component.scss']
})

export class InfoStep4Component implements OnInit {
  // sortedData: Dessert[]
  Dessert: any;
  selectedValue: string = "";
  // desserts: Dessert[] = [
  //   {icon:"assets/images/folder-icon.png", name: 'Sketch Templates', size: "8 GB", type: "FOLDER", modified: new Date()},
  //   {icon:"assets/images/folder-icon.png", name: 'Public Document', size: "4 GB", type: "FOLDER", modified: new Date()},
  //   {icon:"assets/images/folder-icon.png", name: 'Backups', size: "20 GB", type: "FOLDER", modified: new Date()},
  //   {icon:"assets/images/doc-icon.png", name: 'Resources', size: "8 GB", type: "FOLDER", modified: new Date()},
  //   {icon:"assets/images/folder-icon.png", name: 'Design Briefs', size: "8 GB", type: "FOLDER", modified: new Date()},
  //   {icon:"assets/images/folder-icon.png", name: 'Price', size: "8 GB", type: "FOLDER", modified: new Date()},
  //   {icon:"assets/images/pdf-icon.png", name: 'Project Price', size: "8 GB", type: "FOLDER", modified: new Date()}
    
  // ];
  filedata = [
    {icon:"assets/images/folder-icon.png", name: 'Sketch Templates', size: "8 GB", type: "FOLDER", modified: new Date()},
    {icon:"assets/images/folder-icon.png", name: 'Public Document', size: "4 GB", type: "FOLDER", modified: new Date()},
    {icon:"assets/images/folder-icon.png", name: 'Backups', size: "20 GB", type: "FOLDER", modified: new Date()},
    {icon:"assets/images/doc-icon.png", name: 'Resources', size: "8 GB", type: "FOLDER", modified: new Date()},
    {icon:"assets/images/folder-icon.png", name: 'Design Briefs', size: "8 GB", type: "FOLDER", modified: new Date()},
    {icon:"assets/images/folder-icon.png", name: 'Price', size: "8 GB", type: "FOLDER", modified: new Date()},
    {icon:"assets/images/pdf-icon.png", name: 'Project Price', size: "8 GB", type: "FOLDER", modified: new Date()}
  ];
  fildata: FilterVal[] = [
    {value: 'all', viewValue: 'All'},
    {value: 'name', viewValue: 'Name'},
    {value: 'size', viewValue: 'Size'},
    {value: 'folder', viewValue: 'Folder'}
  ];
  

  

  constructor() { 
    // this.sortedData = this.desserts.slice();
  }

  // sortData(sort: Sort) {
  //   const data = this.desserts.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.sortedData = data;
  //     return;
  //   }

  //   this.sortedData = data.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'name':
  //         return this.compare(a.name, b.name, isAsc);
  //       case 'size':
  //         return this.compare(a.size, b.size, isAsc);
  //       case 'type':
  //         return this.compare(a.type, b.type, isAsc);
  //       case 'modified':
  //         return this.compare(a.modified, b.modified, isAsc);
        
  //       default:
  //         return 0;
  //     }
  //   });


    
  // }

  ngOnInit(): void {
    
    
  }
  
  // compare(a: string | string, b: any | string, isAsc: boolean) {
  //   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  // } 

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.filedata, event.previousIndex, event.currentIndex);
  }
  
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  check: boolean = false;
  tableChecked(){
    this.check = !this.check
  }
  
  
  
}


