import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, AfterViewChecked } from '@angular/core';
import { IBox, IMapOptions, MarkerTypeId } from "angular-maps";

//tenho que achar a pasta types, na verdade baixar, verificar de novo no link abaixo
//https://www.npmjs.com/package/bingmaps
// import * as from "./types/MicrosoftMaps/Microsoft.Maps.d.ts"

@Component({
    selector: 'maps',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit, AfterViewInit{
 
  


    // _markerTypeId = MarkerTypeId 
    map: any;
    Microsoft: any;
    pushPin: any;

    @ViewChild("myMap",{read: ElementRef}) private myMap: ElementRef;

    constructor(){}

    ngOnInit(): void{
        console.log('onInit iniciou')
   
        // this.createMap();

    }
    ngAfterViewInit(): void {
        this.GetMap();
        
    }
 
  
    GetMap(){
        this.map = new Microsoft.Maps.Map(this.myMap.nativeElement,{  
            credentials: 'AlaF7WJVfXUqwzv3-vsTgm2xBLCh7yvFtT0uv-c5ooFYFCdpyOrj-_88F9Yj5cCD'
    
        });
        this.localizacao();
        this.Pin()
    }

    localizacao(){
        this.map.setView({
            mapTypeId: Microsoft.Maps.MapTypeId.road,
            center: new Microsoft.Maps.Location(-22.5049185, -43.1775753),
            zoom: 15

        })
       
    }

    Pin(){
        
        this.pushPin = new Microsoft.Maps.Pushpin(this.map.getCenter(), null);
        this.map.entities.push(this.pushPin);
    }




//     _options: IMapOptions = {
//         disableBirdseye: false,
//         disableStreetside: false,
//         navigationBarMode: 1
//    };

}