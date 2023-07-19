import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'notas-sintel',
    loadChildren: () => import('../app/notas-sintel/notas-sintel.module').then(m => m.NotasSintelModule)
  },
  {
    path: 'buscador-fontes',
    loadChildren: () => import('../app/buscador-fontes/buscador-fontes.module').then(m => m.BuscadorFontesModule)
  },
  {
    path: 'dicionario-totvs',
    loadChildren: () => import('../app/dicionario-totvs/dicionario-totvs.module').then(m => m.DicionarioTotvsModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
