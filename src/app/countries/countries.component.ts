import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../shared/services/countries.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  constructor(private countriesService:CountriesService){}
  countries:any = []
    ngOnInit(){
      this.fetchingAllCountries()
    }
    fetchingAllCountries(){
      return this.countriesService.getAllCountries().subscribe((data =>
        this.countries = data.body
        ))
    }


    // fetchingPackagingTypese() {
    //   this.lookupService.gettAllPackagingTypes().subscribe({
    //     next: (res: any) => {
    //       this.packaging = res.body;
    //     }, error: (err: any) => {
    //       console.log(err)
    //     }
    //   });
    // }
}
