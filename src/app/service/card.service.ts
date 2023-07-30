import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cardItemList: any = [];
  ProductList = new BehaviorSubject<any>([]);
  search = new BehaviorSubject<string>('');
  constructor() {
    this.getProduct();
  }

  getProduct() {
    return this.ProductList.asObservable();
  }
  setProduct(product: any) {
    this.cardItemList.push(...product);
    this.ProductList.next(product);
  }
  addtoCard(Product: any) {
    this.cardItemList.push(Product);
    this.ProductList.next(this.cardItemList);
    this.getTotalAmount();
    console.log(this.cardItemList);
  }
  getTotalAmount(): number {
    let grandTotal = 0;
    this.cardItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }
  removeCard(product: any) {
    this.cardItemList.map((a: any, index: any) => {
      if (product.id == a.id) {
        return this.cardItemList.splice(index, 1);
      }
    });
    this.ProductList.next(this.cardItemList);
  }
  removeAllcard() {
    this.cardItemList = [];
    this.ProductList.next(this.cardItemList);
  }
}
