import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  product:any;
  errors: String[];
  flash:any;
  flag:boolean;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.product={title:"", price:"", productImage:""};
    this.flash ={title:"", price:"", productImage:""};
    this.flag=false;
  }
  createProd(){
    console.log("we enter here why?");
    let ob = this._httpService.createProduct(this.product);
    ob.subscribe(data=>{
      console.log("Created yuhu", data);
      if(data['errors']){
        this.flash= data['errors'];
        console.log(this.flash);
      }  
      else{

        this.goHome();
      }
    })
     
  }
  goHome(){
    this._router.navigate(['/show']);
  }
}
