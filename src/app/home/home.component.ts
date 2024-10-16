import { Component, OnInit } from '@angular/core';
import { IStockData } from '../stockDataDefinition';
import { stockInfo } from '../stockdata';
import { StockService } from '../services/stockdata.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  header: string ='Please select a Stock Exchange';
  stockData: IStockData[] = stockInfo;

  constructor(private stockService: StockService){}
  ngOnInit() {
    console.log(this.stockData);
  }

  stockSelected(stock:IStockData) {
    this.stockService.userSelStock = stock;
    this.stockService.getSelectedStockExc.next(stock);
    this.stockService.isStockExcSelected = true;
  }
}
