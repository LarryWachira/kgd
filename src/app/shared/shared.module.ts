import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    CommonModule,
    RouterModule,
    SharedRoutingModule
  ],
  exports: [FooterComponent, HeaderComponent, ListComponent],
  declarations: [FooterComponent, HeaderComponent, ListComponent]
})
export class SharedModule { }
