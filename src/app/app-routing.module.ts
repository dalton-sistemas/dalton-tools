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
    path: 'rpw-validacoes',
    loadChildren: () => import('../app/rpw-validacoes/rpw-validacoes.module').then(m => m.RpwValidacoesModule)
  },
  {
    path: 'buscador-fontes',
    loadChildren: () => import('../app/buscador-fontes/buscador-fontes.module').then(m => m.BuscadorFontesModule)
  },
  {
    path: 'buscador-texto',
    loadChildren: () => import('../app/buscador-texto/buscador-texto.module').then(m => m.BuscadorTextoModule)
  },
  {
    path: 'dicionario-totvs',
    loadChildren: () => import('../app/dicionario-totvs/dicionario-totvs.module').then(m => m.DicionarioTotvsModule)
  },
  {
    path: 'itens-almox',
    loadChildren: () => import('../app/itens-almox/itens-almox.module').then(m => m.ItensAlmoxModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
