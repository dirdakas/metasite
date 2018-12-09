import { IPerson, ContactsService } from './../../../../services/contacts.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.sass']
})
export class ContactPreviewComponent implements OnInit {
  selectedContact$: Observable<IPerson>;

  constructor(
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.selectedContact$ = this.contactsService.selectedContact$
      .pipe();
  }

}
