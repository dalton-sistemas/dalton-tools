import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItensAlmoxComponent } from './itens-almox/itens-almox.component';

const routes: Routes = [
  { path: '', component: ItensAlmoxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItensAlmoxRoutingModule { }
