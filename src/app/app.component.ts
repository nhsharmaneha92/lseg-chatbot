import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { StockService } from './services/stockdata.service';
import { StockListComponent } from './stock-list/stock-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,StockComponent,StockListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy{
  title = 'lseg-chatbot';
  mainMenu = 'Go to Main Menu';
  constructor(protected stockService: StockService){}

  reloadApp() {
    this.stockService.isStockExcSelected = false;
    this.stockService.isStockSelected = false;

  }

  ngOnDestroy(): void {
    this.stockService.getSelectedStock.unsubscribe();
    this.stockService.getSelectedStockExc.unsubscribe();
  }
}
