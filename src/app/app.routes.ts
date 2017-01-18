import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './components/about-page.component';
import { QuotesPageComponent } from './components/quotes-page.component';

const appRoutes: Routes = [
  { path: '', component: QuotesPageComponent,  pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent }
];

export const AppRoutesModule = RouterModule.forRoot(appRoutes);
