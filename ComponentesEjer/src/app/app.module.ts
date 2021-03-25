import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SumarComponent } from './components/sumar/sumar.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaComponent } from './components/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    SumarComponent,
    CronometroComponent,
    CalculadoraComponent,
    FormularioComponent,
    ListaComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
