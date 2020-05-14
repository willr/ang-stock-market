import { Component, OnInit } from '@angular/core';

import { Stock } from '../../model/stock'

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stocks: Array<Stock>;

  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 95),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765),
    ];

    for (const stock of this.stocks) {
      const diff = (stock.price / stock.previousPrice) - 1;
      // consider a large change to be more that 5%
      // const largeChange = Math.abs(diff) > 0.05;
      // console.log('Price Change diff: ' + diff.toString() + ' largeChange: ' + largeChange.toString() + ' ?');
      console.log('Price Change diff: ' + diff.toString() + ' ' + stock.isPositiveChange().toString());
      stock.stockClasses = {
        'positive': stock.isPositiveChange(),
        'negative': !stock.isPositiveChange(),
        // 'large-change': largeChange,
        // 'small-change': !largeChange
      };
    }
  }

  toggleFavorite(event, index) {
    console.log('We are toggling the favorite state for this stock', index, event);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }

  trackStockByCode(index, stock) {
    return stock.code;
  }

}
