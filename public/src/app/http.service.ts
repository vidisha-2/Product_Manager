import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  product:any;
  editId;
  constructor(private _http:HttpClient) { }
  getProducts(){
    return this._http.get('/api/products');
  }
  createProduct(product){
    console.log("we call te controller");
    return this._http.post('/api/products',product);
  }
  updateProduct(id, newProduct){
    return this._http.put(`/api/products/${id}`, newProduct);
  }
  deleteProd(id){
    return this._http.delete(`/api/products/${id}`);
  }
  show(id){
    this.editId = id;
    return this._http.get('/api/products/'+id);
  }
}
