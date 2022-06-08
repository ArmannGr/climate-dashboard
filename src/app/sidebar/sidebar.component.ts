import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/wetter',       title: 'Wetter',    icon:'public',  class: '' },
    { path: '/co2',       title: 'CO2',    icon:'co2',  class: '' },
    { path: '/einwohner',       title: 'Einwohner',    icon:'groups',  class: '' },
    { path: '/wasser',       title: 'Wasser',    icon:'water',  class: '' },
    { path: '/energie',       title: 'Energie',    icon:'electric_bolt',  class: '' },
    { path: '/wind',       title: 'Wind',    icon:'air',  class: '' },
    { path: '/solar',       title: 'Solar',    icon:'sunny',  class: '' },
    { path: '/internet',       title: 'Internet',    icon:'wifi',  class: '' },
    { path: '/tourismus',       title: 'Tourismus',    icon:'map',  class: '' },
    { path: '/user',          title: 'About US',      icon:'nc-single-02',  class: 'active-pro' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
