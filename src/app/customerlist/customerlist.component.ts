import { Component } from '@angular/core';
import { RideService } from '../services/ride.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'


@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent {

  customers:any

  constructor(private service:RideService){

    this.ngOnInit()

   }



  ngOnInit(){

    this.service.getCustomers().subscribe(data=>this.customers=data)
 }



  handleDelete(id:any){

    this.service.deleteCustomer(id).subscribe(data=>{

      // console.log(data);

      this.ngOnInit()
    })
  }
  generatePdf(id:any){
    let customerDetail=this.customers.find((cust:any)=>cust.id==id)
    let body=[]
    let index=0
    for (let work of customerDetail.works){
      index++
      body.push([work.title,work.description,work.amount])
    }
    const doc = new jsPDF()
    autoTable(doc, {
      head: [['Title','Description','Amount']],
      body: body,
        
      
    })
    doc.save('table.pdf')
    
  }


}
