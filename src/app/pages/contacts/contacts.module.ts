import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { FilterComponent } from './components/filter/filter.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

@NgModule({
  declarations: [
    ContactsComponent,
    FilterComponent,
    ContactPreviewComponent,
    ContactListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ContactsComponent]
})
export class ContactsModule { }
