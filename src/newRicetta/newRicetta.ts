import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Ricetta } from '../ricetta/Ricetta';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-newricetta',
  templateUrl: './newRicetta.html',
  styleUrls: ['./newRicetta.css']
})
export class NewRicettaComponent implements OnInit {
  
  @Input() newRicettaSelected : Ricetta = new Ricetta;

  @Output() saveRicettaEvent = new EventEmitter<Ricetta>();
  @Output() updateSavedRicettaEvent = new EventEmitter<Ricetta>();
  @Output() cancelSavedRicettaEvent = new EventEmitter<Ricetta>();
  
  ricetta: Ricetta= new Ricetta();
  
  constructor() {
    
   }

   saveRicetta(){
    this.saveRicettaEvent.emit(this.ricetta);
    this.ricetta= new Ricetta();
  }

  updateSavedRicetta(){
    this.updateSavedRicettaEvent.emit(this.ricetta)
  }
  cancelSavedRicetta(){
    this.cancelSavedRicettaEvent.emit(this.ricetta)
  }

  modifyRicetta(ricetta: Ricetta){
    this.newRicettaSelected = ricetta;
  }


  //N.B: IL METODO CHE SEGUE VA FATTO QUI IN NEW NOTA, E NON COLLEGATO AD APP.COMPONENT, IN QUANTO NON CANCELLA DALL'ARRAY, 
  //MA SI CANCELLA IL FORM ANCOR PRIMA CHE ESSO PRENDA "VITA" E VADA A PRENDERE POSTO NELL'ARRAY, QUINDI RIMANE "LOCALE"
  cancelRicetta(){
    //this.cancelRicettaEvent.emit(this.ricetta);
    this.ricetta.titolo= '';
    this.ricetta.descrizione='';
    this.ricetta.durata= '';
  }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}