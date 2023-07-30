import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  ProductDetails: any;
  filtercatagory: any;
  searchkey: string = '';
  constructor(
    private api: CardService,
    private http: HttpClient,
    private cardService: CardService
  ) {}

  ngOnInit() {
    this.getApiData();
    this.cardService.search.subscribe((item: any) => {
      this.searchkey = item;
    });
  }

  getApiData() {
    this.http
      .get('https://fakestoreapi.com/products')
      .pipe(
        map((item: any) => {
          return item;
        })
      )
      .subscribe((item: any) => {
        this.ProductDetails = item;
        this.filtercatagory = item;
        this.ProductDetails.forEach((ele: any) => {
          if (
            ele.category === "men's clothing" ||
            ele.category === "women's clothing"
          ) {
            ele.category = 'fashion';
          }
          Object.assign(ele, { quantity: 1, total: ele.price });
        });
      });
    return this.ProductDetails;
  }
  addToCard(list: any) {
    this.cardService.addtoCard(list);
  }
  filterProducts(category: string) {
    this.filtercatagory = this.ProductDetails.filter((filter: any) => {
      if (filter.category == category || category == '') {
        return filter;
      }
    });
    console.log(this.filtercatagory);
  }
}
