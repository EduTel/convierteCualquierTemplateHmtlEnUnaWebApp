import { RouterModule, Routes } from '@angular/router';
import {
  AboutComponent,
  PortafolioComponent,
  PortfolioItemComponent
} from "./components/index.paginas";

const appRoutes: Routes = [
  { path: '', component: PortafolioComponent  },
  { path: 'about', component: AboutComponent },
  { path: 'portfolioitem', component: PortfolioItemComponent },
  { path: '**',redirectTo: '',pathMatch: 'full'}
];
export const app_routing = RouterModule.forRoot(appRoutes);
