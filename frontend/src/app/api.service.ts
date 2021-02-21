import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  SERVIDOR = "http://localhost:3000"


  public readContacts(){
    return this.httpClient.get<Contact[]>('${this.SERVIDOR}/contacts');
  }

  public createContact(contact: Contact){
    return this.httpClient.post<Contact>('${this.SERVIDOR}/contacts/create', contact);
  }

  public updateContact(contact: Contact){
    return this.httpClient.put<Contact>('${this.SERVIDOR}/contacts/${contact.id}/update', contact);
  }

  public deleteContact(id: number){
    return this.httpClient.delete('${this.SERVIDOR}/contacts/${id}/delete');
  }
}
