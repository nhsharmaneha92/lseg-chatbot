import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stockdata.service';
import { IStockData, ItopStock } from '../stockDataDefinition';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent implements OnInit {
  stock!: ItopStock;
  constructor(private stockService: StockService){}

  ngOnInit() {
    this.stockService.getSelectedStock.subscribe((data:ItopStock) => {
      this.stock = data;
    })
  }
}
