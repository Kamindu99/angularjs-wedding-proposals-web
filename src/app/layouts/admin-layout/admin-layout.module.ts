import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { BridesComponent } from '../../brides/brides.component';
import { GroomsComponent } from '../../grooms/grooms.component';
import { HomepageComponent } from '../../homepage/homepage.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule
  ],
  declarations: [
    HomepageComponent,
    BridesComponent,
    GroomsComponent
  ]
})

export class AdminLayoutModule { }
