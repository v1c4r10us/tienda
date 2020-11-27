import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.scss']
})
export class RepuestosComponent implements OnInit {

  constructor(private dataService: DataService) { }

  //****Properties
  repus=[];
  title='DigitalTec';
  isMenuOpen=true;
  contentMargin=240;
  onToolbarMenuToggle(){
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen=!this.isMenuOpen;

    if(!this.isMenuOpen){
      this.contentMargin=70;
    } else{
      this.contentMargin=240;
    }
  }
  OnSendForm(){
    console.log(this.repus);
  }
  //****EndProperties

  ngOnInit(): void {
    this.dataService.getRepu().subscribe(data=>this.repus=data);
  }

}
