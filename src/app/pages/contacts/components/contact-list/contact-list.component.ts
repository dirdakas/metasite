import { ContactsService, IPerson } from './../../../../services/contacts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent implements OnInit, OnDestroy {
  contactList$: Observable<IPerson[]>;
  selectedContact: IPerson;
  sortRule: string;

  constructor(
    private contactsService: ContactsService
  ) {
  }

  ngOnInit(): void {
    this.contactList$ = this.contactsService.contactList$
      .pipe();
  }

  viewPerson(person: IPerson): void {
    this.selectedContact = person;
    this.contactsService.updateSelectedContact(person);
  }

  sortName(): void {
    if (this.sortRule) {
      this.sortRule = (this.sortRule === 'asc') ? 'desc' : 'asc';
    } else {
      this.sortRule = 'asc';
    }
    console.log('this.sortRule', this.sortRule);
    this.contactsService.sortContactsByName(this.sortRule);
  }

  ngOnDestroy(): void {
    this.contactsService.updateSelectedContact(null);
  }
}
