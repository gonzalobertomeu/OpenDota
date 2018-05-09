import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'perfil', component: PerfilComponent  },
    { path: '**', component: LoginComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
