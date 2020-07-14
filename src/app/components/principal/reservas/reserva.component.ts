import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
    selector: 'reservas',
    templateUrl: './reserva.component.html',
    styleUrls: [ './reserva.component.scss']
})
export class ReservasComponent implements OnInit{
    public MASKS = MASKS;
    reservaForm: FormGroup;
    submitted = false;
    
    constructor(private fb: FormBuilder, private reservaService: ReservaService){}

    ngOnInit(): void {
        this.createForm();
        
    }

    enviarForm(){
        this.reservaService.cadastraReserva(this.reservaForm.value)
        .subscribe( (data) =>{
            console.log('cadastrado como', data)

            setTimeout(() =>{ 
                this.reservaForm.reset();
                this.submitted = true;
            }, 2000);

            setTimeout(() =>{ 
                this.submitted = false;
            }, 5000);

         
        })
    }

    createForm(){
        this.reservaForm = this.fb.group({

            nome: 
            [
                '', 
                Validators.compose([
                    Validators.required,
                    Validators.maxLength(35)
                ])
            ],
            cpf:
            [
                '',
                Validators.compose([
                    Validators.required,
                    NgBrazilValidators.cpf
                ])
            ],
            qtdPessoas:
            [
                '',
                Validators.required
            ],
            dataReserva:
            [
                '',
                Validators.required
            ],
            observacoes:
            [
                '',
                Validators.maxLength(100)
            ],
            telefone:
            [
                '',
                Validators.required,,
                NgBrazilValidators.telefone
            ],
            horario: 
            [
                '',
                Validators.required
            ]
        })
    }
}