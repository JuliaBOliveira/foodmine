import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TabelaComponent } from './tabela/tabela.component';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, TabelaComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
