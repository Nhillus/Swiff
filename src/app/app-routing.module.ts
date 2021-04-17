import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
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
    path: 'tab4',
    loadChildren: () => import('./menu/tab4.module').then(m => m.Tab4PageModule)
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
    path: 'tab7',
    loadChildren: () => import('./calendario/tab7.module').then(m => m.Tab7PageModule)
  },
  {
    path: 'tab8',
    loadChildren: () => import('./mensajes/tab8.module').then(m => m.Tab8PageModule)
  },
  {
    path: 'login',
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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
