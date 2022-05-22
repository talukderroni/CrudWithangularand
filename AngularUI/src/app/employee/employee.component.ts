import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
@Injectable()
export class EmployeeComponent implements OnInit
 {

  public apiUrl:string="http://localhost:3206";
  constructor(public http:HttpClient)
   {
   }
  public employeelist:any[]=[];
  ngOnInit(): void 
  {
    this.http.get<any[]>(this.apiUrl+"/api/getEmployeelist")
    .subscribe(result => 
      {
        console.log( result);
        this.employeelist=result;
        
    });

    this.init();
  }
  public init():any
  {
    let arr:number[]=[2,4,10,100,1,20];
    let secondArr:any[]=['A','B'];

    let words="1"
      //arrow method
    let newWords=words.padStart(3,'0').padEnd(5,'0');
    sessionStorage.setItem('key1','dhaka');
    let value=sessionStorage.getItem('key1');
   

    // let arrnew:any[]= arr.map(x=>{
    //   console.log(x);
    //   return x+1;

    // });
   
    console.log((.2+2.1));


    // arrnew.forEach((value,index)=>
    // {
    //   console.log(value);

    // })
  

  }

public deleteEmployee(id:any)
{
    let headers = { 'Content-Type': 'application/json' };
    this.http.post<any>(this.apiUrl+ "/api/deleteEmpById?id="+id,{},{headers}).subscribe(
    {
        next:result=>
        {
        console.log(result);
     
        let arr=[12,2,12,3223,21];
        
        console.log(arr.filter(x=>x>2));


          // console.log("Delete ",id);

          const item = this.employeelist.find(item => item.id === id);
          this.employeelist.splice(this.employeelist.indexOf(item),1);
   
        }

    });


}



  

}
