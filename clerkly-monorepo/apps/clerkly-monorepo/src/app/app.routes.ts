import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';


export const appRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [],
      },
      { path: '**', redirectTo: '' },
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}