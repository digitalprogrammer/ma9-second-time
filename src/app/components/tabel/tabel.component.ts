import { Component, OnInit } from '@angular/core';
import { Clients } from './../../models/clients';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.css'],
})
export class TabelComponent implements OnInit {
  clients: Clients[];
  constructor(public clientService: ClientsService) {}

  ngOnInit(): void {
    this.getClients();
  }

  // delete a client
  deleteClient(client: Clients) {
    this.clientService.deleteClient(client).subscribe(() => {
      this.getClients();
    });
  }

  //edit the client
  editClient(client: Clients) {
    this.clientService.sendClient(client);
  }

  //get all the clients
  getClients() {
    this.clientService.getClients().subscribe((clients: Clients[]) => {
      this.clients = clients;
    });
  }
}
