import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'profitrate'})

export class ProfitRatePipe implements PipeTransform {
    transform(sellingPrice: number, buyingPrice: number): string {
        const result = ((sellingPrice - buyingPrice) / buyingPrice) * 100;
        return result.toFixed(2) + "%";
    }
}