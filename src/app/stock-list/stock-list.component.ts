import { Component } from '@angular/core';
import { StockService } from '../services/stockdata.service';
import { IStockData, ItopStock } from '../stockDataDefinition';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [],
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.scss'
})
export class StockListComponent {
  selectedStock!: IStockData;
  header: string ='Please select a Stock';
  constructor(private stockService: StockService){
    this.stockService.getSelectedStockExc.subscribe((data:IStockData) => {
      this.selectedStock = data;
      console.log('test from ',this.selectedStock);
    })
  }

  ngOnInit() {
    
  }

  stockSelected(data: ItopStock) {
    this.stockService.getSelectedStock.next(data);
    this.stockService.isStockSelected = true;
  }
}
