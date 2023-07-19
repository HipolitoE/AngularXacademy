import { Component } from '@angular/core';


type Producto = {
  nombre: string;
  costo: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent { 
  title: string = 'SantexAngular';
  showList: boolean = true;

  toggleList() {
    this.showList = !this.showList;
  //  this.mostrarLista = false
  }

  headers: string[] = ['Nombre', 'Costo'];

  productos: Producto[] = [
    { nombre: 'Leche', costo: '500 ARS' },
    { nombre: 'Detergente', costo: '1000 ARS' },
    { nombre: 'Carne', costo: '2000 ARS' },
    { nombre: 'Pollo', costo: '1500 ARS' },
    { nombre: 'Shampoo', costo: '1200 ARS' },
  ];  
}

