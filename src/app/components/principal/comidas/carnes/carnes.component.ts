import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'carnes',
    templateUrl: './carnes.component.html',
    styleUrls: ['./carnes.component.scss']
})
export class CarnesComponent implements OnInit{

    constructor(private route: Router){}

    ngOnInit(): void {
        
    }
    goCardapio(){
        this.route.navigate(['/cardapio'])
    }
}