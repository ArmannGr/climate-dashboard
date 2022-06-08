import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    imports: [RouterModule, CommonModule, MatIconModule],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}
