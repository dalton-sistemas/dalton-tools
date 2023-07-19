import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasSintelListComponent } from './notas-sintel-list/notas-sintel-list.component';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: NotasSintelListComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotasSintelRoutingModule { }
