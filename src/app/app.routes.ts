import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  { path: 'homepage', component: HomePageComponent },
  { path: 'search/:type', component: SearchComponent },
  { path: 'list/:type', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent },
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full',//因為空路徑是任何路徑的前綴，如果不完整比對路徑，就會不斷的做轉址行為
  },
];
