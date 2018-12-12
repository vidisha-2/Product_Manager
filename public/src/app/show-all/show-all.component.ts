import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  products:any=[];
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    let ob = this._httpService.getProducts();
    ob.subscribe(products=>{
      this.products = products;
      console.log(`All the products ${products}`);
    })
  }

  sendToEditProduct(id){
    this._httpService.show(id);
    this.editProduct();
  }

  editProduct(){
    this._router.navigate(['/edit/'+this._httpService.editId]);
  }

  deleteProduct(id){
    let observable = this._httpService.deleteProd(id);
    observable.subscribe(product=>{
      console.log("Deleted", product)
    })
    this.getAll();
  }
}
