import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightmoodService {

  constructor() { }

  togglingDarkMode(){
    if(localStorage.getItem('app:mode') === 'dark'){
      localStorage.setItem('app:mode','light')
    } else {
      localStorage.setItem('app:mode','dark')
    }
  }

 get getCurrentMood(){
    return localStorage.getItem('app:mode')
  }
 get isLight(){
    return localStorage.getItem('app:mode') === 'light'
  }
 get isDark(){
    return localStorage.getItem('app:mode') === 'dark'
  }
}
