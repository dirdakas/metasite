import { ContactsService } from './../../../../services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
  filterForm: FormGroup;
  cityList$: Observable<string[]>;

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.filterForm = this.fb.group({
      name: '',
      city: 'NULL',
      isActive: false
    });

    this.cityList$ = this.contactsService.cityList$
      .pipe();
  }

  filterContactList(): void {
    const byName: string = this.filterForm.get('name').value;
    let byCity: string = this.filterForm.get('city').value;
    const isActive: boolean = this.filterForm.get('isActive').value;

    if (byCity === 'NULL') {
      byCity = null;
    }

    this.contactsService.filterContactList(byName, isActive, byCity);
  }
}
