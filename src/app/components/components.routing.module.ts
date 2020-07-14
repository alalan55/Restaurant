import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './principal/home/home.component';
import { ComidaComponent } from './principal/comidas/comidas.component';
import { CarnesComponent } from './principal/comidas/carnes/carnes.component';
import { SopaComponent } from './principal/comidas/sopas/sopas.component';
import { MassasComponent } from './principal/comidas/massas/massas.component';
import { ReservasComponent } from './principal/reservas/reserva.component';
import { CardapioComponent } from './principal/cardapio/caardapio.componet';
import { ReservasFeitasComponent } from './Reservas-feitas/reservas.component';

const componentsRoutes= [
    {
        path: '',
        component: PrincipalComponent,
        children: [
            {
                path: '',
                component:  HomeComponent
            }
        ]
    },
    {
        path: 'food',
        component: ComidaComponent,
        children: [
            {
                path: 'steak',
                component:  CarnesComponent
            },
            {
                path: 'soup',
                component: SopaComponent
            },
            {
                path: 'pastas',
                component: MassasComponent
            }
        ]
    },
    {
        path: 'reserva',
        component: ReservasComponent
    },
    {
        path: 'cardapio',
        component: CardapioComponent
    },
    {
        path: 'reservas-efetuadas',
        component: ReservasFeitasComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(componentsRoutes)],
    exports:[RouterModule]
})
export class ComponentsRouting{}