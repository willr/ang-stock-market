import { StockItemComponent } from './stock-item.component';

describe('StockItemComponent', () => {
  it('should have stock passed in ngOnChanged', () => {
    const appComponent = new StockItemComponent();
    expect(appComponent.stock).toBeUndefined();
    appComponent.ngOnInit();
    expect(appComponent.stock).toEqual(
      new Stock('Test Stock Company', 'TSC', 85, 90)
    );
  });
});