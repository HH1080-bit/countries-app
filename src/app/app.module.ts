import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroMoon,heroMagnifyingGlass,heroChevronDown } from '@ng-icons/heroicons/outline';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { DarkModeComponent } from './heading/dark-mode/dark-mode.component';
import { TitlingComponent } from './heading/titling/titling.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchFilterComponent } from './filters/search-filter/search-filter.component';
import { DropdownFilterComponent } from './filters/dropdown-filter/dropdown-filter.component';
import { CountriesComponent } from './countries/countries.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    DarkModeComponent,
    TitlingComponent,
    FiltersComponent,
    SearchFilterComponent,
    DropdownFilterComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgIconsModule.withIcons({ featherAirplay, heroMoon,heroMagnifyingGlass,heroChevronDown }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
