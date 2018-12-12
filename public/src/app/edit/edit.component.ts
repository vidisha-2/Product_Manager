import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product:any;
  prodInfo:any;
  errors: String[];
  oneId = this._httpService.editId;
  flash:any;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.product={title:"", price:"", productImage:""};
    this.getOne(this.oneId);
  }
  getOne(oneId){
    let ob = this._httpService.show(oneId);
    ob.subscribe(data=>{
      console.log("Got one", data);
      this.prodInfo = data;
      this.product ={title: this.prodInfo.title, price:this.prodInfo.price, productImage: this.prodInfo.productImage};
    })
  }
  editProduct(){
    let ob = this._httpService.updateProduct(this.oneId,this.product);
    ob.subscribe(data=>{
      console.log("Updated", data);
      if(data['errors']){
        this.flash= data['errors'];
      }  
      else{

        this.goHome();
      }
    })
   
  }
  goHome(){
    this._router.navigate(['/show']);
  }
  deleteProduct(oneId){
    let observable = this._httpService.deleteProd(this.oneId);
    observable.subscribe(product=>{
      console.log("Deleted", product)
      this.goHome();
    })
  }
}
