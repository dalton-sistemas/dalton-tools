import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PoFieldModule, PoModule, PoTableModule, PoDynamicModule, PoListViewModule  } from '@po-ui/ng-components';
import { InterceptorsModule } from '../interceptors/interceptors.module';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    PoModule,
    InterceptorsModule,
    PoTableModule,
    PoFieldModule,
    FormsModule,
    PoTableModule,
    PoPageDynamicTableModule,
    PoDynamicModule,
    PoListViewModule
  ],
  exports:[
    CommonModule,
    HttpClientModule,
    PoModule,
    InterceptorsModule,
    PoTableModule,
    PoFieldModule,
    FormsModule,
    PoTableModule,
    PoPageDynamicTableModule,
    PoDynamicModule,
    PoListViewModule
  ]
})
export class SharedModule { }
