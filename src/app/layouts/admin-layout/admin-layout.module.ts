import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { BridesComponent } from '../../brides/brides.component';
import { GroomsComponent } from '../../grooms/grooms.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule
  ],
  declarations: [
    BridesComponent,
    GroomsComponent,
  ]
})

export class AdminLayoutModule { }
