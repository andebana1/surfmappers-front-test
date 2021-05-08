import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploadComponent } from './_components/upload/upload.component';
import { ListagemComponent } from './_components/listagem/listagem.component';
import { AprovacaoComponent } from './_components/aprovacao/aprovacao.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UploadComponent
  },
  {
    path: 'visualizar',
    component: ListagemComponent
  },
  {
    path: 'aprovar',
    component: AprovacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
