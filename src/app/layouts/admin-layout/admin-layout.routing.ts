import { Routes } from '@angular/router';

import { BridesComponent } from '../../brides/brides.component';
import { GroomsComponent } from '../../grooms/grooms.component';
import { HomepageComponent } from '../../homepage/homepage.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: 'brides', component: BridesComponent },
    { path: 'grooms', component: GroomsComponent }
];
