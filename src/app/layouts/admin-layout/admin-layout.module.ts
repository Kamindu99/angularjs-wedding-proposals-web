import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { BridesComponent } from '../../brides/brides.component';
import { GroomsComponent } from '../../grooms/grooms.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule
  ],
  declarations: [
    HomeComponent,
    BridesComponent,
    GroomsComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    UpgradeComponent
  ]
})

export class AdminLayoutModule { }
