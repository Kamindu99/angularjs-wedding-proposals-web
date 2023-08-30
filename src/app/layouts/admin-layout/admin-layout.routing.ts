import { Routes } from '@angular/router';

import { BridesComponent } from '../../brides/brides.component';
import { GroomsComponent } from '../../grooms/grooms.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'brides', component: BridesComponent },
    { path: 'grooms', component: GroomsComponent }
];
