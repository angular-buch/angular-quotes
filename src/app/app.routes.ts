import { Routes, RouterModule } from '@angular/router';
import { QuotesPageComponent } from './pages/quotes-page.component';
import { AboutPageComponent } from './pages/about-page.component';

const appRoutes: Routes = [
  { path: '', component: QuotesPageComponent,  pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent }
];

export const AppRoutesModule = RouterModule.forRoot(appRoutes);
