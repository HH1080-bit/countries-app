import { Component,OnInit } from '@angular/core';
import { LightmoodService } from 'src/app/shared/services/lightmood.service';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent implements OnInit  {
  constructor(private lightMoodService:LightmoodService){}

  currentThemeIcon:any
  currentTheme:any

  ngOnInit(): void {
    this.updateTheme()
  }
  togglingDarkMode(){
   this.lightMoodService.togglingDarkMode()
   this.updateTheme()
   console.log(this.lightMoodService.isLight)

  }
  private updateTheme(){
    this.currentThemeIcon = this.lightMoodService.getCurrentMood === 'dark' ? 'heroMoon' : 'heroSun'
    this.currentTheme = this.lightMoodService.getCurrentMood === 'dark' ? 'dark' : 'light'

  }

}
