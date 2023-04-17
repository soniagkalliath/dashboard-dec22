import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //event 
  @Output() toggle = new EventEmitter()

  //menuIconCliked()
  menuIconCliked(){
    //occur the toggle event in parent
    this.toggle.emit()
    //when dispatch is occur resize screen
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 100);
  }
}
