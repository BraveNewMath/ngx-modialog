import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'angular2-modal';

import { DemoHead } from './demo-head/index';


@NgModule({
  imports: [ CommonModule, ModalModule ], // we need ModalModule since DemoHead uses directives from it
  declarations: [ DemoHead ],
  exports: [ DemoHead, ModalModule ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
      ]
    };
  }
}
