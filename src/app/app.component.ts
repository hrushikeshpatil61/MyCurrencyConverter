import { Component } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myCurrencyConverter';
  Currjson: any=[];
  country1 = 'INR';
  country2 = 'INR';
  result:string = '1';

  changecountry1(a:string){
    this.country1 = a;
   
  }
  changecountry2(a:string){
    this.country2 = a;
   
  }

  constructor(private currency: CurrencyapidataService){}
  convert(){
    //console.log(this.country1);
    //console.log(this.country2);
    this.currency.getcurrencydata(this.country1).subscribe(data =>
      {
        this.Currjson = JSON.stringify(data);
        this.Currjson = JSON.parse(this.Currjson);
        console.log(this.Currjson);
        this.result = this.Currjson.rates[this.country2];
        //console.log(this.result);
      })
  }
}
