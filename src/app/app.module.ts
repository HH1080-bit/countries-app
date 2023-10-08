import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { heroMoon,heroMagnifyingGlass,heroChevronDown,heroSun } from '@ng-icons/heroicons/outline';
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
    NgIconsModule.withIcons({heroMoon,heroMagnifyingGlass,heroChevronDown,heroSun}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
