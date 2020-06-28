import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TabelComponent } from './components/tabel/tabel.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, TabelComponent, FormComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
