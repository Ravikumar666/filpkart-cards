import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  product: any = [];
  grandTotal: number = 0;
  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.getProduct().subscribe((res) => {
      this.product = res;
      this.grandTotal = this.cardService.getTotalAmount();
    });
  }

  removeItem(remove: any) {
    this.cardService.removeCard(remove);
  }
  empty() {
    this.cardService.removeAllcard();
  }
}
