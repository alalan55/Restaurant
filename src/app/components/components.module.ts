import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgBrazil } from 'ng-brazil' 
import { TextMaskModule } from 'angular2-text-mask';

import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './principal/home/home.component';
import { ComponentsRouting } from './components.routing.module';
import { CardComponent } from './principal/home/cards/cards.component';
import { SharedModule } from '../shared/shared.module';
import { ApresentacaoComponet } from './principal/home/apresentacao/apresentacao.component';
import { MapaComponent } from './principal/home/mapa/mapa.component';

import { MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, WindowRef, DocumentRef, MapServiceFactory, BingMapServiceFactory } from "angular-maps";
import { ComidaComponent } from './principal/comidas/comidas.component';
import { CarnesComponent } from './principal/comidas/carnes/carnes.component';
import { SopaComponent } from './principal/comidas/sopas/sopas.component';
import { MassasComponent } from './principal/comidas/massas/massas.component';
import { ReservasComponent } from './principal/reservas/reserva.component';
import { HttpClientModule } from '@angular/common/http';
import { CardapioComponent } from './principal/cardapio/caardapio.componet';
import { ReservasFeitasComponent } from './Reservas-feitas/reservas.component';



@NgModule({
  declarations:
    [

      PrincipalComponent,
      HomeComponent,
      CardComponent,
      ApresentacaoComponet,
      MapaComponent,
      //comidas
      ComidaComponent,
      CarnesComponent,
      SopaComponent,
      MassasComponent,
      //reservas de mesas
      ReservasComponent,
      CardapioComponent,
      //pagina com as reservas efetuadas
      ReservasFeitasComponent

   


    ],
  imports:
    [
      CommonModule,
      RouterModule,
      ComponentsRouting,
      SharedModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAOjtLZTZ1OU3-5Tm_5JI2CM_AuFMwF9_Y'
      }),
      MapModule.forRoot(),
      ReactiveFormsModule,
         //http requisições
         HttpClientModule,

         NgBrazil,
         TextMaskModule
     
    ],
    providers:
     [
      {
        provide: MapAPILoader, deps: [], useFactory: MapServiceProviderFactory
    }
  ]
})



export class ComponentsModule { }

export function MapServiceProviderFactory(){
  let bc: BingMapAPILoaderConfig = new  BingMapAPILoaderConfig();
  bc.apiKey = 'AlaF7WJVfXUqwzv3-vsTgm2xBLCh7yvFtT0uv-c5ooFYFCdpyOrj-_88F9Yj5cCD';
  bc.branch = "experimental"; 
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());

}
