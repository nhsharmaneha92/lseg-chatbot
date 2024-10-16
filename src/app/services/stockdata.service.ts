import {  Injectable } from "@angular/core";
import { IStockData, ItopStock } from "../stockDataDefinition";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class StockService {
    private selectedStock!: IStockData;
    getSelectedStockExc: BehaviorSubject<IStockData> = new BehaviorSubject([] as IStockData);
    getSelectedStock: BehaviorSubject<ItopStock> = new BehaviorSubject([] as IStockData);
    isStockExcSelected: boolean = false;
    isStockSelected: boolean = false;

    set userSelStock(stock: IStockData) {
        this.selectedStock = stock;
    }
    get userSelStock() {
        return this.selectedStock;
    }
}