import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';


export const routes: Routes = [{path:'homepage',component:HomePageComponent},{
    path:'',redirectTo:'/homepage',pathMatch:'full'
}];
