import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { UserComponent }            from '../../pages/user/user.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {Co2Component} from "../../pages/co2/co2.component";
import {EinwohnerComponent} from "../../pages/einwohner/einwohner.component";
import {EnergieComponent} from "../../pages/energie/energie.component";
import {WasserComponent} from "../../pages/wasser/wasser.component";
import {WetterComponent} from "../../pages/wetter/wetter.component";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    UserComponent,
    Co2Component,
    EinwohnerComponent,
    EnergieComponent,
    WasserComponent,
    WetterComponent
  ]
})

export class AdminLayoutModule {}
