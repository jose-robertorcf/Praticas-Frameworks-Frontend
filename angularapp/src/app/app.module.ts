import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { TelaInicialComponent } from './telainicial/telainicial.component';
import { TelaBoasVindasComponent} from './telaboasvindas/telaboasvindas.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    TelaInicialComponent,
    TelaBoasVindasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
