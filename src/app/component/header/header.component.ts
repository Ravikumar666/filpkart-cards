import { Component } from '@angular/core';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  total_item: number = 0;
  searchterm: string = '';
  constructor(private cardservice: CardService) {}

  ngOnInit() {
    this.notification_count();
  }

  notification_count() {
    this.cardservice.getProduct().subscribe((item) => {
      this.total_item = item?.length;
    });
  }
  search(event: any) {
    this.searchterm = (event.target as HTMLInputElement).value;
    this.cardservice.search.next(this.searchterm);
  }
}
