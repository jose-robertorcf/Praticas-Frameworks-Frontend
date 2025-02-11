import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { TelaBoasVindasComponent } from './telaboasvindas/telaboasvindas.component';


const routes: Routes = [
  { path: 'home', component: TelaBoasVindasComponent},
  { path: 'calculadora', component: CalculadoraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//ng generate module app-routing --flat --module=app