import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent{
  heores: string[] = ['ironman', 'Capitan America', 'Hulk','Black Widow', 'Goku'];
  heroeBorrado: string = '';

  borrarHeroe(){
    
    this.heroeBorrado = this.heores.shift()||'';
   

  }

}
