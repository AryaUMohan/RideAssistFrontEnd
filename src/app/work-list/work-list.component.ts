import { Component, Input, OnInit } from '@angular/core';
import { RideService } from '../services/ride.service';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {

  works:any

  total:any

  @Input() custId:any

  constructor(private service:RideService){

    this.service.refreshRequired.subscribe(data=>{

      this.ngOnInit()
    })
    
    
  }
  ngOnInit(): void{

    console.log("inside wrk create",this.custId);

    this.service.retrieveCustomer(this.custId).subscribe((data:any)=>{

      this.works=data?.works

      this.total=data?.work_total
    
    })
  }

}
