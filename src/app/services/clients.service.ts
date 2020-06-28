import { Injectable } from '@angular/core';
import { Clients } from './../models/clients';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  //communication between childs
  private subject = new Subject<any>();

  onClient(): Observable<any> {
    return this.subject.asObservable();
  }

  sendClient(client) {
    this.subject.next(client);
  }

  //client list reference
  clients: Clients[];

  //api
  url = 'http://localhost:3000/clientes';

  //instantiate the httpClient
  constructor(private httpClient: HttpClient) {}

  //headers: avoid trobles in the server
  httpsOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  //get all the clients
  getClients(): Observable<Clients[]> {
    return this.httpClient.get<Clients[]>(this.url);
  }

  //save the client
  saveClient(client: Clients): Observable<Clients> {
    return this.httpClient.post<Clients>(
      this.url,
      JSON.stringify(client),
      this.httpsOptions
    );
  }

  //update a client
  updateClient(client: Clients): Observable<Clients> {
    return this.httpClient.put<Clients>(
      this.url + '/' + client.id,
      JSON.stringify(client),
      this.httpsOptions
    );
  }

  //delete a client
  deleteClient(client: Clients) {
    return this.httpClient.delete<Clients>(
      this.url + '/' + client.id,
      this.httpsOptions
    );
  }
}
