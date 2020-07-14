import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'card',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss']
})
export class CardComponent implements OnInit{

    constructor(private route: Router){}

    ngOnInit(): void {
        
    }
    goSteack(){
        this.route.navigate(['food/steak'])
    }
    goSoup(){
        
        this.route.navigate(['food/soup'])
    }
    goPastas(){
        this.route.navigate(['food/pastas'])
    }
}