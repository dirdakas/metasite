import { Injectable } from '@angular/core';

import contacts from '../contacts.json';
import { BehaviorSubject } from 'rxjs';

export interface IPerson {
  active?: boolean;
  city: string;
  email: string;
  id: number;
  name: string;
  phone: string;
  surname: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contactListFromFile: IPerson[] = [];

  private contactListSource: BehaviorSubject<IPerson[]> = new BehaviorSubject<IPerson[]>([]);
  contactList$ = this.contactListSource.asObservable();

  private cityListSource: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  cityList$ = this.cityListSource.asObservable();

  private selectedContactSource: BehaviorSubject<IPerson> = new BehaviorSubject<IPerson>(null);
  selectedContact$ = this.selectedContactSource.asObservable();

  constructor() {
    console.log('contacts', contacts);
    this.contactListFromFile = contacts;
    this.updateContactList(this.contactListFromFile);
    this.updateCityList();
  }

  updateContactList(newList: IPerson[]): void {
    this.contactListSource.next(newList);
  }

  sortContactsByName(order: string): void {
    const currentList: IPerson[] = this.contactListSource.getValue();
    currentList.sort();
    if (order !== 'asc') {
      currentList.reverse();
    }
    this.contactListSource.next(currentList);
  }

  updateSelectedContact(newPerson: IPerson): void {
    this.selectedContactSource.next(newPerson);
  }

  filterContactList(byName: string, isActive: boolean, byCity: string): void {
    this.updateSelectedContact(null);
    console.log('filter name:', byName, 'isActive', isActive, 'city', byCity);
    if (!byName && !isActive && !byCity) {
      // update from file (reset)
      this.updateContactList(this.contactListFromFile);
    } else {
      const currentList: IPerson[] = this.contactListFromFile;
      const newList = currentList.filter((person: IPerson) => {
        let isResult: boolean;
        if (byName) {
          isResult = person.name.toLowerCase()
            .includes(byName);
          if (!isResult) {
            return false;
          }
        }

        if (byCity) {
          isResult = person.city === byCity;
          if (!isResult) {
            return false;
          }
        }

        // show only active / inactive
        isResult = !!person.active === isActive;

        return isResult;
      });
      this.updateContactList(newList);
    }
  }

  private updateCityList(): void {
    const contactList: IPerson[] = this.contactListSource.getValue();
    if (contactList) {
      const currentCityList: string[] = this.cityListSource.getValue();
      for (const contact of contactList) {
        if (currentCityList.findIndex((city: string) => city === contact.city) === -1) {
          currentCityList.push(contact.city);
        }
      }
      console.log('currentCityList', currentCityList);
      this.cityListSource.next(currentCityList);
    }
  }
}
