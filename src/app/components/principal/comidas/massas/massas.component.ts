import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'massas',
    templateUrl: './massas.component.html',
    styleUrls: ['./massas.component.scss']
})
export class MassasComponent implements OnInit{


    constructor(private route: Router){}
    ngOnInit(): void {
        
    }

    goCardapio(){
        this.route.navigate(['/cardapio'])
    }
}