import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router"

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
@Injectable()
export class CreateEmployeeComponent implements OnInit 
{
  
  public apiUrl:string="http://localhost:3206";
  constructor(public http:HttpClient,private router:Router)
   {
   }
 
  public cityList:any[]=[];
  public NewCityList:any[]=[];

  public selectedOption:string|null=null;

  ngOnInit(): void 
  {
       this.selectedOption=null;

      this.http.get<any[]>(this.apiUrl+"/api/getcityList")
        .subscribe(result => 
          {

           this.cityList = result;
            result.forEach(x => 
            {
            this.NewCityList.push({  id:x.id,  cityName:x.cityName +"  "+ x.id });
          
           });
         console.log( this.NewCityList);
        })
  
  }
public getValueByselcted(event:any)
{
  const value = event.target.value;

  console.log(this.selectedOption);


}
public SaveEmployee(empdata:any)
{
console.log(empdata.value);

// call the api for save
 let body = JSON.stringify(empdata.value);
 console.log(body);
 let headers = { 'Content-Type': 'application/json' };

    this.http.post<any>(this.apiUrl+ "/api/saveEmploye", body,{headers}).subscribe
    (
        result=>
        {
        console.log(result);
        alert("Successfully Saved!");
        this.router.navigate(['/employeePage']);
        }

    );




// const headers = { 'Authorization': 'Bearer my-token'};

 
//     this.http.post<any>('https://reqres.in/api/posts', body, { headers }).subscribe(data => {
//         this.postId = data.id;
//     });

}


}

export class ParentClass
{
  public Number1:number=10;
  public Number2:number=20;

    public addNumber():number
    {

    return 0;

    }
}

export class ChildClass extends ParentClass
{

  public name:string="Kamal";
  public override Number1: number=20;
  public override addNumber(): number 
  {
    return 100;
  }
  // public getName():any{

  //   return 20;
  // }

}

 

