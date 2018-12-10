import { ContactsComponent } from './pages/contacts/contacts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    component: ContactsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'notifications',
    component: ContactsComponent
  },
  {
    path: '**',
    redirectTo: 'contacts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
