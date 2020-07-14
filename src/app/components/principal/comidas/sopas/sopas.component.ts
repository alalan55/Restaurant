import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'sopa',
    templateUrl: './sopas.component.html',
    styleUrls: ['./sopas.component.scss']
})
export class SopaComponent implements OnInit{


    constructor( private route: Router){}
    ngOnInit(): void {
     
    }

    goCardapio(){
        this.route.navigate(['/cardapio'])
    }
}