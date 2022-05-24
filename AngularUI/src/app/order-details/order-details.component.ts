import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit 
{
  OrderForm: FormGroup;
  total:string;

  constructor(private fb: FormBuilder)
   {


   }

  ngOnInit() 
  {
    
    this.OrderForm = this.fb.group({
      CustomerName: '',
      Date: '',
      Address: '',
      items: this.fb.array([])
     
    });

    
  }
  public listItem():FormArray
  {
    return this.OrderForm.get('items') as FormArray
  }
  public addNewItem()
  {
   this.listItem().push
   (
    this.fb.group({
      item:'',
      category: '',
      qty: '',
    
    
    }));

  }
 public  onSubmit()
 {
  console.log( this.OrderForm);

 }
 public  submitdata()
 {
  console.log( this.OrderForm.value);

 }
 public  removeRow(index:number)
 {
   this.listItem().removeAt(index);
   console.log( this.OrderForm);

 }
 public calculateQty(index:number)
 {
   
console.log( this.listItem().value);

   let item= this.listItem().at(index).value.item;
   let category= this.listItem().at(index).value.category;

  this.listItem().at(index).get('qty')?.setValue(item+category);
  this.OrderForm.get('CustomerName')?.setValue(item+category );

  this.total= this.listItem().value.reduce((prev: any,next: { qty: any; })=>prev+next.qty,0)
  let totalSum=0;
  this.listItem().value.map((x:any)=>
  {


  })
  this.listItem().value.map((x: any)=>
    {
      console.log(x);
     totalSum+=x.qty;
    });

   console.log( this.total);
  

   var arr = [ 11, 89, 23, 7, 98 ]; 
  
   let array=[1,2,3];
   let answer=this.listItem().value.reduce((acc: any,val: any)=>acc+val);

     console.log(answer);



}


 
 
}
class Chats 
{
  messages: Message[]=[
    {
    sender :'sa',message:''}];


}
class Message {
  constructor(public sender: string, public message: string) {}
}
