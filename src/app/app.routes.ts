import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Error404Component } from './error404/error404.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';

export const routes: Routes = [
    {path: '', component: PublicLayoutComponent, 
        children: [
            {path: '', component: HomepageComponent},
            {path: 'confirmation', component: OrderConfirmComponent}
        ]
    },
    {path: '**', component: Error404Component}
];
