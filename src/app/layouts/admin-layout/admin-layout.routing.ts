import { Routes } from '@angular/router';

import { UserComponent } from '../../pages/user/user.component';
import {Co2Component} from "../../pages/co2/co2.component";
import {EinwohnerComponent} from "../../pages/einwohner/einwohner.component";
import {EnergieComponent} from "../../pages/energie/energie.component";
import {WasserComponent} from "../../pages/wasser/wasser.component";
import {WetterComponent} from "../../pages/wetter/wetter.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'user',           component: UserComponent },
    { path: 'co2',        component: Co2Component },
    { path: 'einwohner',        component: EinwohnerComponent },
    { path: 'energie',        component: EnergieComponent },
    { path: 'wasser',        component: WasserComponent },
    { path: 'wetter',        component: WetterComponent }
];
