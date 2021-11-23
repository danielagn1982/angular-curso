import {Component } from "@angular/core";




@Component({
    selector   :'app-heroe',
    templateUrl: 'heroe.component.html'


})


export class HeroeComponent{
    nombre : string = 'Capitan America';
    edad   : number = 105
     
    get nombreCapitalizado(){

        return this.nombre.toUpperCase();
    }


    obtenerNombre() : string {
                /*para crear un template de string*/    
       return `${this.nombre}-${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre= 'blackwidow';
    }
    cambiarEdad(): void {
        this.edad= 200;
    }


}