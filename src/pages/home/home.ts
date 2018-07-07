import { Component, } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Rest } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: string[];
  errorMessage: string;
  splash = true;

  constructor(public navCtrl: NavController, public rest: Rest) {
    
  }

  

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
    this.getCountries();
  }

  

  getCountries() {
    setInterval(()=> {
      this.rest.getCountries()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
    },4000); 
    }
    
  

  

}
