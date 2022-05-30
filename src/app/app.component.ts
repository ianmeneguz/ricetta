import { Component, Input } from '@angular/core';
import { Ricetta } from 'src/ricetta/Ricetta';
import { NewRicettaComponent } from 'src/newRicetta/newRicetta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ricetta';

  ricette : Ricetta[]= [];
  
  public savedElement = false;
  showForm: boolean = false;

  ricettaSelected: Ricetta = new Ricetta();
  ricettaToUpload: Ricetta= new Ricetta();
  
  
  onNewClick() {
      this.ricettaSelected = new Ricetta();
      this.savedElement= true;
      //console.log("funziona")
  }

  ricettaToOutput(ricetta: Ricetta){
    this.ricettaToUpload= ricetta;
  }

  createRicetta(ricetta: Ricetta){
    this.ricette.splice(0,0,ricetta);
    this.showForm=true;
  }

  deleteRicetta(ricetta: Ricetta){
    this.ricette.splice(this.ricette.indexOf(ricetta), 1)
  }
  
  modifyRicetta(ricetta: Ricetta){
    this.ricettaToUpload = ricetta;
    //this.ricettaSelected = ricetta;
    this.ricettaSelected= Object.assign({}, ricetta);
  }

  updateRicetta(ricetta: Ricetta){
    this.ricettaToUpload = new Ricetta();
  }
  cancelSavedRicetta(){
    this.ricettaToUpload.titolo=this.ricettaSelected.titolo;
    this.ricettaToUpload.descrizione=this.ricettaSelected.descrizione;
    this.ricettaToUpload.durata=this.ricettaSelected.durata;
    this.ricettaToUpload = new Ricetta();
  }
}
