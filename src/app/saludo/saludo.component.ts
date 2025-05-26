import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {

  formatearSaludo():string{
    //aqui programa Erick

    return "Hola Mundo";

  }
  
  onclickSaludo():string {
    //aqui programo yo
    return "ok";
  }
}

