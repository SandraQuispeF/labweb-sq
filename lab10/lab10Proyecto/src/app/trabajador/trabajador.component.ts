import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent implements OnInit {
  // Atributos
  nombre = 'Sandra Quispe';
  edad = 20;
  email = 'squispe@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;

  // Constructor
  constructor() { }

  ngOnInit(): void {
  }

  // Metodos
  esActivo() {
    if (this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo';
  }

  ultimos3Sueldos() {
    let suma=0;
    for(let x=0; x<this.sueldos.length; x++)
      suma+=this.sueldos[x];
    return suma;
  }
}
