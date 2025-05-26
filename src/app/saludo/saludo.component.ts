import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {

  formatearSaludo(){
    //aqui programa Erick
  }
  
  onclickSaludo():string {
    //aqui programo yo
    return "ok";
  }
}

