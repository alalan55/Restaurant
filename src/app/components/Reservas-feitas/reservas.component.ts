import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'reservas-feitas',
    templateUrl: 'reservas.component.html',
    styleUrls: ['./reservas.component.scss']
})
export class ReservasFeitasComponent implements OnInit{

    constructor(private service: ReservaService){}

    reservados$: Observable<any>

    ngOnInit(): void {
        this.getReservas()
    }

    getReservas(){
        this.reservados$ = this.service.getReservas();
    }
}