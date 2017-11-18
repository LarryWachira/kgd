import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }     from '../app.component';
import { ListComponent } from './components/list/list.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
    {
        path: 'home',
        component: AppComponent,
        children: [
            {
                path: '',
                redirectTo: '/home/ps',
                pathMatch: 'full',
            },
            {
                path: 'ps',
                component: ListComponent,
            },
            {
                path: 'xbox',
                component: FooterComponent,
            },
            {
                path: 'pc',
                component: FooterComponent,
            },
        ],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
