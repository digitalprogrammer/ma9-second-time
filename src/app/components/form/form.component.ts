import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';
import { Clients } from './../../models/clients';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  client = {} as Clients;
  clients: Clients[];

  subscription: Subscription;

  constructor(public clientService: ClientsService) {
    this.subscription = this.clientService.onClient().subscribe((data) => {
      this.client = data;
    });
  }

  ngOnInit(): void {}

  //save or update a client
  saveClient(form: NgForm) {
    console.log(this.client);
    if (this.client.id !== undefined) {
      this.clientService.updateClient(this.client).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.clientService.saveClient(this.client).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  //clear the form
  cleanForm(form: NgForm) {
    this.clientService.getClients();
    form.resetForm();
    this.client = {} as Clients;
  }
}
