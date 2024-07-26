import { Routes } from '@angular/router';
import { PagesComponent } from './authorizations/pages/pages.component';
import { FunctionalitiesComponent } from './authorizations/functionalities/functionalities.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './menu/add/add.component';
import { ModifyComponent } from './menu/modify/modify.component';
import { DeleteComponent } from './delete/delete.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "authorizations/pages", component: PagesComponent },
    { path: "authorizations/functionalities", component: FunctionalitiesComponent },
    { path: "menu/add", component: AddComponent },
    { path: "menu/modify", component: ModifyComponent },
    { path: "menu/delete", component: DeleteComponent }
];
