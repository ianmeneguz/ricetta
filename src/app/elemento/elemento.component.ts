import { Component, Input, Output, OnInit } from '@angular/core';
import { Ricetta } from './../../ricetta/Ricetta';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.css']
})
export class ElementoComponent implements OnInit {

  @Input() ricettaRegistered: Ricetta = new Ricetta;
  @Output() ricettaOutputEvent = new EventEmitter<Ricetta>()
  @Output() deleteRicettaEvent = new EventEmitter<Ricetta>()
  @Output() updateRicettaEvent = new EventEmitter<Ricetta>()
  constructor() { }

  sendRicetta(){
    this.ricettaOutputEvent.emit(this.ricettaRegistered)
  }

  deleteRicetta(){
    this.deleteRicettaEvent.emit(this.ricettaRegistered)
  }

  updateRicetta(){
    this.updateRicettaEvent.emit(this.ricettaRegistered)
  }

  ngOnInit(): void {
  }

}
