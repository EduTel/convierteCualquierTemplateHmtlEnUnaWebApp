import { RouterModule, Routes } from '@angular/router';
import {
  AboutComponent,
  PortafolioComponent,
  PortfolioItemComponent
} from "./components/index.paginas";

const appRoutes: Routes = [
  { path: 'home', component: PortafolioComponent  },
  { path: 'about', component: AboutComponent },
  { path: 'portfolioitem', component: PortfolioItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];
export const app_routing = RouterModule.forRoot(appRoutes,{useHash:true});
