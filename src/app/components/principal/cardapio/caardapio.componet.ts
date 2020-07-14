import { Component, OnInit } from '@angular/core';

import { Cardapio } from 'src/app/model/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { Observable } from 'rxjs';

@Component({
    selector:  'cardapio',
    templateUrl: './cardpio.component.html',
    styleUrls: ['./cardapio.component.scss']

})
export class CardapioComponent implements OnInit{

    // cardapios: Cardapio[];
    // cardapio = {} as Cardapio;

    cardapio$: Observable<any>;

    constructor( private  service: ReservaService){}
    
    ngOnInit(): void {
        this.pegarCardapio();
        
    }

    // pegarCardapio(){
    //     this.service.getCardapio().subscribe((elems: Cardapio[]) =>{
    //         this.cardapios = elems
    //     })
    // }
    pegarCardapio(){
    this.cardapio$ = this.service.getCardapio();
    }

}