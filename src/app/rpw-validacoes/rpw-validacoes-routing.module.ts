import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpwValidacoesComponent } from './rpw-validacoes.component';

const routes: Routes = [
  { path: '', component: RpwValidacoesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RpwValidacoesRoutingModule { }
