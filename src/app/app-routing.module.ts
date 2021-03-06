import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./papelera/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./lupaPdf/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./notificaciones/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./inicio/tab5.module').then(m => m.Tab5PageModule)
  },

  {
    path: 'tab6',
    loadChildren: () => import('./nube/tab6.module').then(m => m.Tab6PageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then(m => m.CalendarioPageModule)
  },
  {
    path: 'tab8',
    loadChildren: () => import('./mensajes/tab8.module').then(m => m.Tab8PageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'todos-documentos',
    loadChildren: () => import('./todos-documentos/todos-documentos.module').then( m => m.TodosDocumentosPageModule)
  },
  {
    path: 'plantillas',
    loadChildren: () => import('./plantillas/plantillas.module').then( m => m.PlantillasPageModule)
  },
  {
    path: 'buscador',
    loadChildren: () => import('./buscador/buscador.module').then( m => m.BuscadorPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'vision',
    loadChildren: () => import('./vision/vision.module').then( m => m.VisionPageModule)
  },
  {
    path: 'ajustes-perfil',
    loadChildren: () => import('./ajustes-perfil/ajustes-perfil.module').then( m => m.AjustesPerfilPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'idiomas',
    loadChildren: () => import('./idiomas/idiomas.module').then( m => m.IdiomasPageModule)
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
  {
    path: 'selecion-sexo',
    loadChildren: () => import('./selecion-sexo/selecion-sexo.module').then( m => m.SelecionSexoPageModule)
  },
  {
    path: 'selecion-seguro',
    loadChildren: () => import('./selecion-seguro/selecion-seguro.module').then( m => m.SelecionSeguroPageModule)
  },  {
    path: 'pruebausuario',
    loadChildren: () => import('./pruebausuario/pruebausuario.module').then( m => m.PruebausuarioPageModule)
  },

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
