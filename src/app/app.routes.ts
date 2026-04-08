import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Competences } from './competences/competences';
import { Projets } from './projets/projets';
import { Contact } from './contact/contact';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'competences', component: Competences },
  { path: 'projets', component: Projets },
  { path: 'contact', component: Contact }
];
