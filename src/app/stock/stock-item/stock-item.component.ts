import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnChanges {

  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  ngOnChanges() {
    const diff = (this.stock.price / this.stock.previousPrice) - 1;
    // console.log('Price Change diff: ' + diff.toString() + ' ' + this.stock.isPositiveChange().toString());
    const isPositive: boolean = this.stock.isPositiveChange();

    this.stock.stockClasses = {
      positive: isPositive,
      negative: !isPositive,
    };

  }

  onToggleFavorite(event) {
    console.log('Emiting toggleFavorite for stock: ' + this.stock.code, event);
    this.toggleFavorite.emit(this.stock);
  }

}
