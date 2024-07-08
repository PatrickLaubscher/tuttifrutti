import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {path: '', component: PublicLayoutComponent, 
        children: [
            {path: '', component: HomepageComponent}
        ]
    },
    {path: '', component: PublicLayoutComponent}
];
