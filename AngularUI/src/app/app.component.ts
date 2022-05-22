import { Component } from '@angular/core';
import { of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  title = 'Angular Component';
  Name = "talukder Roni";
  Count: number = 0;
  Condition: boolean = true;
  showMe: boolean = false;
  showPara: boolean = false;
  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;


//observe Create
// of for oobservecreate as Argument

public getObserveData():any
{
  let arr=[10,2,90,78,21,8];
  let observeData=of(arr);
observeData.subscribe(x=>alert(x),
error=>console.log("error"),()=>console.log("Complete")



)


return 0;

}

public CountrtyList:Country[]=
[
{
 Name:"Bangladsh",Id:1
},
{
  Name:"Australia",Id:1
 },
 {
  Name:"Dhaka",Id:1
 },
]

Item:string="";
arr:any=[];
public AddItem()
{
this.arr.push( this.Item);
}



public SubmitData(data:any)
{
var isValidate=  this.validateData(data);
if(isValidate==false)
{

  alert("First Name Required!");

}
console.log(JSON.stringify(data.value));

}
public validateData(data:any):boolean
{
  if(data.value.firstname=="")
  {
  return false;
  }
  return false;
}
  public ShowMethod() {
    this.showPara = true;
    return;
  }
  public AddMethod() 
  {

    this.result = Number(this.firstNumber) + Number(this.secondNumber);

  }
  public SubMethod()
  {
   this.result= this.firstNumber-this.secondNumber;

  }
  public MultipleMethod() {

    this.result = this.firstNumber * this.secondNumber;

  }
  public DivisionMethod() 
  {

  this.result=this.firstNumber/this.secondNumber;
  }



  public SaveData() {
    this.Count++;

  }
  value = "";
  clearValue() {
    this.value = "";
  }



  movieList: Movie[] =
    [
      {
        title: "tamil", director: "kamal", cast: "vvv", releaseDate: '20/01/2022'
      },
      {
        title: "hollyWood", director: "mayna", cast: "12", releaseDate: "hds"
      }
    ]

}
class Movie {
  title: string = "";
  director: string = "";
  cast: string = "";
  releaseDate: string = "";
}
export class Country
{
public Name:string="";

public Id:number=0;



}

