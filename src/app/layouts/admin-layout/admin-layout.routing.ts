import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import {Co2Component} from "../../pages/co2/co2.component";
import {EinwohnerComponent} from "../../pages/einwohner/einwohner.component";
import {EnergieComponent} from "../../pages/energie/energie.component";
import {InternetComponent} from "../../pages/internet/internet.component";
import {SolarComponent} from "../../pages/solar/solar.component";
import {TourismusComponent} from "../../pages/tourismus/tourismus.component";
import {WasserComponent} from "../../pages/wasser/wasser.component";
import {WetterComponent} from "../../pages/wetter/wetter.component";
import {WindComponent} from "../../pages/wind/wind.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'co2',        component: Co2Component },
    { path: 'einwohner',        component: EinwohnerComponent },
    { path: 'energie',        component: EnergieComponent },
    { path: 'internet',        component: InternetComponent },
    { path: 'solar',        component: SolarComponent },
    { path: 'tourismus',        component: TourismusComponent },
    { path: 'wasser',        component: WasserComponent },
    { path: 'wetter',        component: WetterComponent },
    { path: 'wind',        component: WindComponent }
];
